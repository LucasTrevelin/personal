import "../styles/global.css";
import 'fontsource-roboto';
import {Avatar, Button, Card, Container, IconButton, Paper} from '@material-ui/core';
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
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


function landing() {
    return(
    <div>
    <header className="Avatar">
      <div className="introduction">
        <h1 style={{'textShadow': '2px 2px 4px #000000', 'fontSize':'3em'}}>
          Bem vindo ao meu Portifólio!
        </h1>  
        <hr/>
        <div className="backgAvatar" style={{backgroundImage:"url(https://img.freepik.com/free-vector/application-development-banner_1325-399.jpg?size=626&ext=jpg", margin:'50px auto' , height:'25vh', width: '100%', borderRadius:'60px', backgroundRepeat:'round'}}>
        </div>
      </div>
    </header>
    <body style={{'background':'linear-gradient(0deg, rgba(8,8,8,0.6544818611038166) 0%, rgba(0,0,0,0.8701681356136204) 69%, rgba(0,0,0,1) 100%)', 'width':'100vw' }}>
    <Avatar variant="round" alt="Lucas" src={Lucas3} style={{'width': '17vw', 'height':'auto', 'top': '-7vw','margin': '0 auto', 'position': 'relative', 'border':'5px solid black'}}/>
    <p style={{'color': "white", 'fontSize': '1.25em','margin':'auto auto 5vh auto'}}>
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
    <Container maxWidth="xl">
      <div style={{ backgroundColor: '#cccccc', height: '66vh', 'border-radius': '60px' , margin: ''}}>
        <Paper elevation={5} style={{ backgroundColor: '#272c34', height: '26vh', width:'90%', margin:"auto" , 'border-radius': '30px', border:'3px solid grey'}}> 
          <h1 style={{ color: 'yellow', 'margin': '20px 20px', textAlign:'center'}}>Sobre o autor</h1>
          <p style={{color:'white', lineHeight:'1.6', textAlign:'start', textIndent: '40px', padding:'10px', fontSize:'1.25em'}}>Sou graduado em Física Biomolecular pela USP-São Carlos, fiz 1 ano de mestrado com bolsa CAPES porém vi que tenho pontos mais fortes para atuação no mundo empresarial. Então atuei por 3 anos como analista de investimentos e riscos Jr. numa empresa de soluções financeiras que atua através de tecnologia e depois em uma consultoria financeira como consultor independente atuando com prospecção e suporte de clientes. Sou uma pessoa bem comunicativa, que contribui como team player e que busca aprender e evoluir em conhecimento. 
          </p>
        </Paper>
        <br/>
          <Card style={{maxWidth:'500px', margin:'auto'}}>
            <CardActionArea>
              <CardMedia
                image={Lucas}
              />
              <CardContent>
                <h1>Projeto1</h1>
                <p color="textSecondary">Aqui a descrição do projeto!</p>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Compartilhar
              </Button>
              <Button size="small" color="primary">
                Visitar
              </Button>
            </CardActions>
          </Card>
          <br/>

          <Paper elevation={5} style={{ backgroundColor: '#272c34', height: '23vh', width:'90%', margin:"auto" , 'border-radius': '30px', border:'3px solid grey'}}> 
          <h1 style={{ color: 'yellow', 'margin': '20px 20px', textAlign:'center'}}>Sobre o autor</h1>
          <p style={{color:'white', lineHeight:'1.6', textAlign:'start', textIndent: '40px', padding:'10px', fontSize:'1.25em'}}>Sou graduado em Física Biomolecular pela USP-São Carlos, fiz 1 ano de mestrado com bolsa CAPES porém vi que tenho pontos mais fortes para atuação no mundo empresarial. Então atuei por 3 anos como analista de investimentos e riscos Jr. numa empresa de soluções financeiras que atua através de tecnologia e depois em uma consultoria financeira como consultor independente atuando com prospecção e suporte de clientes. Sou uma pessoa bem comunicativa, que contribui como team player e que busca aprender e evoluir em conhecimento. 
          </p>
        </Paper>
      </div>
    </Container>
    </body>
    <footer style={{background:'black', position:"sticky", height:'50px', bottom:'0', display:'flex', 'flexDirection': 'row', justifyContent:'space-around'}}>
      <IconButton className="Ref">
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

  export default landing;