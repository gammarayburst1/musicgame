import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function Game() {
    const [countdown, setCountdown] = useState(2);
    const [answerTimeout, setAnswerTimeout] = useState(null);
    const [questionNumber, setQuestionNumber] = useState(1);
    const [soundUrl, setSoundUrl] = useState("");
    const [isCorrect, setIsCorrect] = useState(null);
    const [gameEnded, setGameEnded] = useState(false);
    const [questionId, setQuestionId] = useState('');
    const [userAnswer, setUserAnswer] = useState('');
    const [waitingForAnswer, setWaitingForAnswer] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);

    const chordOptions = ["C", "Cm", "Caug", "Cdim", "Csus2", "Csus4", "C7", "C7sus4", "Cm7♭5", "C△7"];

     // ゲーム開始時のカウントダウン用Effect
    useEffect(() => {
        let timerId;
        // console.log('time',timerId);
        
        if (countdown > 0) {
        // カウントダウン中
        timerId = setTimeout(() => setCountdown(countdown - 1), 1000);
        // console.log('time',timerId);
        } else if (countdown === 0) {
        // カウントダウン終了、サウンド取得
        console.log('count down ended');
        Axios.get('http://localhost:8000/get_sound/')
            .then((response) => {
            setSoundUrl(`http://localhost:8000${response.data.sound_url}`);
            setQuestionId(response.data.question_id);
            })
            .catch((error) => {
            console.error('Error fetching sound:', error);
            });
        }
        
        // return () => {
        // if (timerId) {
        //     clearTimeout(timerId);
        //     console.log('clear time',timerId);
        // }
        // };
    }, [countdown]);


  // ユーザーが回答する時間のタイムアウト用Effect
  useEffect(() => {
    console.log('user timeout effect','countdown=',countdown, 'url=',soundUrl, 'useranswer=',userAnswer, 'waiting=',waitingForAnswer);
    if (countdown === 0 && userAnswer === '' && !waitingForAnswer) {
        setWaitingForAnswer(true);
        const id = setTimeout(() => {
            setIsCorrect(false);
            setWaitingForAnswer(false);
        }, 5000);
        setTimeoutId(id); // タイムアウトIDを保存
    }
  }, [countdown, userAnswer]);

  // 次の問題へ移行するための関数
    const handleNextQuestion = () => {
      // console.log('handleNextQuestion');
        setIsCorrect(null); // 正解・不正解の状態をクリア
        if (questionNumber < 5) {
        // 次の問題へ
        setCountdown(3);
        setSoundUrl("");
        setUserAnswer('');
        setQuestionNumber(questionNumber + 1);
        } else {
        // ゲーム終了
        setGameEnded(true);
        }
    };
  
  // 正解・不正解判定後の次の問題へのカウントダウン用Effect
  useEffect(() => {
    // console.log('correct effect',isCorrect, questionNumber, waitingForAnswer);
    if (isCorrect) {
        if (timeoutId) clearTimeout(timeoutId); // 正解した場合、タイムアウトを解除
    }
    if (isCorrect !== null && !waitingForAnswer) {
      // console.log('isCorrect !== null && !waitingForAnswer');
        const timerId = setTimeout(handleNextQuestion, 2000); // 2秒後に次の問題へ
        return () => clearTimeout(timerId);
    }
  }, [isCorrect, questionNumber, waitingForAnswer]);


    const handleAnswer = (answer) => {
        setUserAnswer(answer);
        Axios.post('http://localhost:8000/check_answer/', {
          user_answer: answer,
          question_id: questionId
        })
          .then((response) => {
            setIsCorrect(response.data.is_correct);
          })
          .catch((error) => {
            console.error('Error checking answer:', error);
          });
      };

    return (
        <div>
            {gameEnded ? (
                <div>
                    <p>Game Over</p>
                    {/* ここに結果やレーティングを表示 */}
                </div>
            ) : (
                <>
                    {countdown > 0 ? (
                        <div>カウントダウン: {countdown}</div>
                    ) : (
                        <>
                            <audio src={soundUrl} autoPlay onEnded={() => setCountdown(3)} />
                            {chordOptions.map((chord, index) => (
                                <button key={index} onClick={() => handleAnswer(chord)}>
                                    {chord}
                                </button>
                            ))}
                        </>
                    )}
                    {isCorrect && <p>正解!</p>}
                    {
                    isCorrect === false && (
                        <div className="incorrect-message">不正解</div>
                    )
                    }
                </>
            )}
        </div>
    );
}

export default Game;
