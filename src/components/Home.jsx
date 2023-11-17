import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Box, createTheme, ThemeProvider } from '@mui/material';
import styled from '@emotion/styled';
import bgImage from '../images/1.png';
import gameStartButtonIconPath from '../images/gamestartbutton3.png';
import settingIconPath from '../images/setting3.png';
import rankingIconPath from '../images/ranking2.png';
import noteIconPath from '../images/onpu3.png';
import myPageButtonIconPath from '../images/mypagebutton3.png';
import searchButtonIconPath from '../images/searchbutton3.png';
import "fontsource-noto-sans-jp"
import "fontsource-noto-sans-jp/500.css"
// import "fontsource-noto-sans-jp/900-normal.css"
import theme from './theme';
import { StyledButton, SmallButton, ButtonIcon } from './StyledComponents';
import clickSoundmp3_1 from '../music/C1.mp3';
import clickSoundmp3_2 from '../music/E1.mp3';
import clickSoundmp3_3 from '../music/G1.mp3';



function Home() {
  const [clickSound1, setClickSound1] = useState(null);
  const [clickSound2, setClickSound2] = useState(null);
  const [clickSound3, setClickSound3] = useState(null);

  // コンポーネントがマウントされた時にAudioオブジェクトを作成
  useEffect(() => {
    setClickSound1(new Audio(clickSoundmp3_1));
    setClickSound2(new Audio(clickSoundmp3_2));
    setClickSound3(new Audio(clickSoundmp3_3));
  }, []);

  // クリック音を再生する関数
  const playSound = (audio) => {
    if (audio) {
      audio.play().catch(e => console.error('Error playing sound:', e));
    }
  };

  console.log('35626');
  return (
    <ThemeProvider theme={theme}>
        <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        p={20}
        sx={{
            boxShadow: '0 5px 10px rgba(0,0,0,0.7)',
          bgcolor: theme.palette.background.default,
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        {/* タイトル */}
        <Typography variant="h2" color="primary" gutterBottom>
            音感ゲーム
        </Typography>

        {/* ゲーム開始ボタン */}
        <StyledButton className="game" variant="outlined" component={Link} to="/game" onClick={() => playSound(clickSound1)}>
        {/* <ButtonIcon src={gameStartButtonIconPath} alt="Game Start Button Icon" className="gameStartButtonIcon" /> */}
        <img src={gameStartButtonIconPath} alt="Game Start Button Icon" style={{ width: '60px', marginRight: '36px' }} />
          ゲーム開始
        </StyledButton>

        {/* マイページボタン */}
        <StyledButton className="mypage" variant="outlined" component={Link} to="/mypage" onClick={() => playSound(clickSound2)}>
        <img src={myPageButtonIconPath} alt="MyPage Button Icon" style={{ width: '40px', marginRight: '36px' }} />
        {/* <ButtonIcon src={myPageButtonIconPath} alt="My Page Button Icon" className="myPageButtonIcon" /> */}
        マイページ
        </StyledButton>

        {/* 下部のボタン群 */}
        <Box display="flex" width="100%">
            {/* ランキングボタン */}
            <SmallButton className="ranking" variant="outlined" component={Link} to="/ranking" onClick={() => playSound(clickSound3)}>
            <img src={rankingIconPath} alt="Ranking Icon" style={{ width: '40px', marginRight: '12px' }} />  
                ランキング
            </SmallButton>

            <SmallButton className="settings" variant="outlined" component={Link} to="/settings">
            <img src={settingIconPath} alt="Setting Icon" style={{ width: '35px', marginRight: '12px' }} />  
                設定
            </SmallButton>

            <SmallButton className="search" variant="outlined" component={Link} to="/search">
            <img src={searchButtonIconPath} alt="Search Icon" style={{ width: '27px', marginRight: '12px' }} />
                ユーザー検索
            </SmallButton>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Home;

// const theme = createTheme({
//   typography: {
//     fontFamily: 'Noto Sans JP',
//     h4: {
//       fontSize: '3rem',
//     },
//   },
//   palette: {
//     primary: {
//       main: '#e2e2e2',
//     },
//     secondary: {
//       main: '#ffd0cb',
//     },
//     background: {
//       default: '#111111',
//     },
//   },
// });

// const StyledButton = styled(Button)`
//   width: 100%;
//   margin: 15px 0;
//   font-size: 2.5rem;
//   background-color: rgba(0, 0, 0, 0.3);
//   transition: transform 0.1s, border-color 0.7s, color 0.7s;

//   &.game-start {
//     color: #c8cf55;
//     border: 3px solid #c8cf55;

//     &:hover {
//     border-color: #e1e96c;
//     color: #e1e96c;
//     transform: scale(1.03);
//     }
//   }

//   &.mypage {
//     color: #2ede28;
//     border: 3px solid #2ede28;

//     &:hover {
//     border-color: #bcffbc;
//     color: #bcf6bc;
//     transform: scale(1.03);
//     }
//   }
// `;

// const SmallButton = styled(Button)`
//   flex-grow: 1;
//   margin: 10px;
//   font-size: 1.5rem;
//   background-color: rgba(0, 0, 0, 0.3);
//   transition: transform 0.1s, border-color 0.7s, color 0.7s;

//   &.ranking {
//     color: #ed4a34;
//     border: 3px solid #ed4a34;

//     &:hover {
//     border-color: #ffa9a0;
//     color: #ffa9a0;
//     transform: scale(1.05);
//     }
//   }

//   &.settings {
//     color: #f09d3e;
//     border: 3px solid #f09d3e;

//     &:hover {
//     color: #ffcc80;
//     border-color: #ffcc80;
//     transform: scale(1.05);
//     }
//   }

//   &.search {
//     color: #6dede9;
//     border: 3px solid #6dede9;

//     &:hover {
//     color: #c7ffff;
//     border-color: #c7ffff;
//     transform: scale(1.05);
//     }
//   }
// `;