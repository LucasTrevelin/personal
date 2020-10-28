import "../styles/global.css";
import 'fontsource-roboto';
import {Avatar, Box, Button, Card, Container, IconButton, Paper} from '@material-ui/core';
import Lucas from "../images/Lucas.png";
import Lucas2 from "../images/Lucas2.jpeg";
import Lucas3 from "../images/Lucas3.jpeg";
import WorkIcon from '@material-ui/icons/WorkOutline';
import Person from '@material-ui/icons/PersonOutline';
import Mail from '@material-ui/icons/MailOutline';
import ExploreIcon from '@material-ui/icons/Explore';
import Git from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Download from '@material-ui/icons/GetAppOutlined'
import "../styles/landing.css"


function landing2() {
    return(
    <div>
    <header className="Avatar">
      <div className="introduction">
        <h1 style={{'textShadow': '2px 2px 4px #000000', 'fontSize':'3em'}}>
          Bem vindo ao meu Portifólio!
        </h1>  
        <hr/>
        <div className="headerContentContainer" style={{margin:"0"}}>
          <Box boxShadow={3} boxSizing className="backgAvatar" >
            <Avatar variant="round" alt="Lucas" src={Lucas3} style={{'width': '180px', 'height':'auto','margin': '0 auto', 'border':'5px solid black'}}/>
            <div className="whitebox">
              <p style={{'color': "black", 'fontSize': '1.5em', margin: 'auto', padding: '10px'}}>
                <em>
                  <div className="person" style={{'display':'flex', 'flexDirection': 'row', 'justifyContent': 'center'}}>
                    <Person/>
                    <strong>Lucas Henrique Trevelin</strong>
                  </div>
                  <div className="work" style={{'display':'flex', 'flexDirection': 'row', 'justifyContent': 'center', 'marginTop': '10px'}}>
                    <WorkIcon/>
                    Web Developer
                  </div>
                </em>
              </p>
            </div>
          </Box>
          <Box boxShadow={3} boxSizing className="backgAbout" >
          <Paper elevation={5} style={{ backgroundColor: '#272c34', height: 'auto', width:'90%', margin:"auto" , 'border-radius': '30px', border:'3px solid grey', padding:'10px', overflow:"scroll", minWidth:'300px',}}> 
            <h1 style={{ color: 'yellow', 'margin': '20px 20px', textAlign:'center'}}>Sobre o autor</h1>
            <p style={{width:'95%', height:'auto', color:'white', lineHeight:'1.6', textAlign:'start', textIndent: '40px', padding:'10px', fontSize:'1.25em', overflow:'auto'}}>Sou graduado em Física Biomolecular pela USP-São Carlos, fiz 1 ano de mestrado com bolsa CAPES porém vi que tenho pontos mais fortes para atuação no mundo empresarial. Então atuei por 3 anos como analista de investimentos e riscos Jr. numa empresa de soluções financeiras que atua através de tecnologia e depois em uma consultoria financeira como consultor independente atuando com prospecção e suporte de clientes. Sou uma pessoa bem comunicativa, que contribui como team player e que busca aprender e evoluir em conhecimento. 
            </p>
          </Paper>
          </Box>
          <Box boxShadow={3} boxSizing className="backgProjects" >
          <Paper elevation={5} style={{ backgroundColor: '#272c34', height: '90%', width:'95%', margin:"auto" , 'border-radius': '30px', border:'3px solid grey', padding:'10px', overflow:"hidden", minWidth:'300px',}}> 
            <h1 style={{ color: 'greenyellow', 'margin': '20px', textAlign:'center'}}>Projetos</h1>
            <p style={{width:'95%', margin:'20px' , height:'auto', color:'white', lineHeight:'1.6', textAlign:'start', padding:'10px', fontSize:'1.25em', overflow:'auto', textAlign:'center'}}> Insira seu projeto aqui! 
            </p>
          </Paper>
          </Box>
        </div>
      </div>
    </header>
    <body style={{'background':'linear-gradient(0deg, rgba(8,8,8,0.6544818611038166) 0%, rgba(0,0,0,0.8701681356136204) 69%, rgba(0,0,0,1) 100%)', 'width':'100vw', height:'170vh'}}>
    </body>
    <footer style={{background:'black', position:"sticky", height:'50px', width:'100%', bottom:'0', display:'flex', 'flexDirection': 'row', justifyContent:'space-around'}}>
      <IconButton style={{color:"white"}}>
        <Mail/>
      </IconButton>
      <IconButton style={{color:"white"}}>
        <LinkedIn/>
      </IconButton>
      <IconButton style={{color:"white"}}>
        <Git/>
      </IconButton>
      <IconButton style={{color:"white"}}>
      <ExploreIcon/>
      </IconButton>
      <IconButton style={{color:"white"}}>
      <Download/>
      </IconButton>
    </footer>
    
    
    </div>
    )
  }

  export default landing2;