import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, TableBody, TableCell, TableHead, TableRow, Button, Container, Typography, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from '@emotion/styled';
import "fontsource-noto-sans-jp"
import "fontsource-noto-sans-jp/500.css"

import { StyledButton } from './StyledComponents';
import bgImage from '../images/1.png';

import rankingIconPath2 from '../images/ranking5_3.png';
import backIconPath from '../images/back_3.png';

const theme = createTheme({
  typography: {
    fontFamily: '"Noto Sans JP", sans-serif',
    h4: {
      fontSize: '3rem',
    },
    body1: {
      fontSize: '1.5rem',
    },
    color: '#ffffff',
  },
});

const StyledTableCell = (props) => {
  const { rank, color: defaultColor, hoverColor, isHovered } = props;

  let cellColor;
  let hoverCellColor;

  if (rank === 1) {
    cellColor = "#F8D000"; // 金色
    hoverCellColor = "#FFFFAA"; // 金色のホバー時の色
  } else if (rank === 2) {
    cellColor = "#C0C0C0"; // 銀色
    hoverCellColor = "#FFFFFF"; // 銀色のホバー時の色
  } else if (rank === 3) {
    cellColor = "#CD7F32"; // 銅色
    hoverCellColor = "#FFC382"; // 銅色のホバー時の色
  } else {
    cellColor = defaultColor || "#797979"; // その他の順位の色 or デフォルトの色
    hoverCellColor = hoverColor; // 既存のhoverColorを使用
  }

  // textAlignのロジックを追加
  let textAlign;
  if (props.children === "ユーザー名") {
    textAlign = "left";
  } else if (props.children === "順位" || props.children === "レーティング" || typeof props.children === "number") {
    textAlign = "center";
  }

  return (
    <TableCell 
      sx={{ 
        fontSize: '1.5rem',
        color: isHovered ? hoverCellColor : cellColor,
        transition: 'color 0.5s', // 色のトランジションを追加
        textAlign: textAlign,
        // textAlign: rank !== undefined || props.children === "順位" || props.children == "レーティング" ? 'center' : 'left',
        // textAlign: isText ? 'left' : 'center',
        // paddingRight: rank !== undefined || props.children === "順位" ? '1rem' : '0',  // 順位の場合は右の余白を1remに
      }}
    >
      {props.children}
    </TableCell>
  );
}

const BackButton = styled(Button)(({ theme }) => ({
  borderRadius: '50%', // 丸いボタンにする
  backgroundColor: 'rgba(0, 0, 0, 0.3)', // 暗くした背景を透過させる
  color: 'white',

  '&:hover': {
    backgroundColor: 'transparent', // ホバー時に背景を完全に透過させる
    color: theme.palette.primary.main, // ホバー時の文字色を変更する
  },
}));


const Ranking = () => {
  const rankings = [
    { rank: 1, username: "user1", rating: 2943 },
    { rank: 2, username: "user2", rating: 2914 },
    { rank: 3, username: "user3", rating: 2913 },
    { rank: 4, username: "user4", rating: 2901 },
  ];
  const navigate = useNavigate();

  const [hoveredRowIndex, setHoveredRowIndex] = React.useState(null);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Box 
            display="flex" 
            flexDirection="column" 
            alignItems="center" 
            justifyContent="flex-start" 
            height="80vh" 
            pt={2}
            sx={{
              background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
          <Box display="flex" alignItems="center">
            <img src={rankingIconPath2} alt="Ranking Icon2" style={{
              width: '66px',       // 画像の幅を50pxに設定
              height: 'auto',      // 高さは自動に設定してアスペクト比を維持
              marginRight: '36px',
            }}  />
            <Typography variant="h4" gutterBottom sx={{ 
              fontSize: '3rem',
              color: '#e6b422'
            }}>
              ランキング
            </Typography>
          </Box>

          <Table>
            <TableHead>
              <TableRow 
                onMouseEnter={() => setHoveredRowIndex(-1)} // ヘッダーは-1として区別
                onMouseLeave={() => setHoveredRowIndex(null)}
              >
                <StyledTableCell color="#f7d7d7" hoverColor="#f7d7d7" isHovered={hoveredRowIndex === -1}> 
                  順位
                </StyledTableCell>
                <StyledTableCell color="#f7d7d7" hoverColor="#f7d7d7" isHovered={hoveredRowIndex === -1}>
                  ユーザー名
                </StyledTableCell>
                <StyledTableCell color="#f7d7d7" hoverColor="#f7d7d7" isHovered={hoveredRowIndex === -1}>
                  レーティング
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rankings.map((ranking, index) => (
                <TableRow 
                  key={ranking.rank} 
                  onMouseEnter={() => setHoveredRowIndex(index)}
                  onMouseLeave={() => setHoveredRowIndex(null)}
                >
                  <StyledTableCell rank={ranking.rank} hoverColor="#D5D5D5" isHovered={hoveredRowIndex === index}>
                    {ranking.rank}
                  </StyledTableCell>
                  <StyledTableCell color="red" hoverColor="pink" isHovered={hoveredRowIndex === index}>
                    {ranking.username}
                  </StyledTableCell>
                  <StyledTableCell color="#d7d88b" hoverColor="#ffffdb" isHovered={hoveredRowIndex === index}>
                    {ranking.rating}
                  </StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <StyledButton className="back" varient="outlined" onClick={() => navigate(-1)}>
          <img src={backIconPath} alt="back Icon" style={{ width: '30px', marginRight: '12px' }} /> 
            戻る
          </StyledButton>
          
          {/* <IconButton onClick={() => navigate(-1)}>
            <img src="/path/to/your/back-icon.png" alt="戻る" />
          </IconButton> */}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Ranking;