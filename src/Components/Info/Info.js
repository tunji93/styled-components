import React from 'react'
import {Link} from 'react-router-dom'
import {Img, ImgWrapper, InfoSec, InfoRow, InfoColumn, TextWrapper,TopLine, Heading, Subtitle} from './InfoStyles'
import {Container, Button} from '../../global'


const Info = (props) => {
    return (
        <>
            <InfoSec lightBg={props.obj.lightBg}>
               <Container>
                   <InfoRow imgStart={props.obj.imgStart}>
                       <InfoColumn>
                          <TextWrapper>
                             <TopLine lightTopLine={props.obj.lightTopLine}>{props.obj.topLine}</TopLine>
                             <Heading lightText={props.obj.lightText}>{props.obj.headLine}</Heading>
                             <Subtitle lightTextDesc={props.obj.lightTextDesc}>{props.obj.description}</Subtitle>
                             <Link to = "/sign-up">
                                 <Button big fontBig Primary={props.obj.primary}>
                                     {props.obj.buttonLabel}
                                 </Button>
                             </Link>
                          </TextWrapper>
                       </InfoColumn>
                       <InfoColumn>
                           <ImgWrapper start={props.obj.start}>
                               <Img src={props.obj.img}alt={props.obj.alt} />
                           </ImgWrapper>
                       </InfoColumn>
                   </InfoRow>

               </Container>
            </InfoSec>
            
        </>
    )
}

export default Info
