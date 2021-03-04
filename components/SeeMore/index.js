import React, {useState} from 'react';
import {Container, Button} from 'reactstrap'
function CutWords(text="", numberOfWords){
  let arrayOfWords = text.split(" ");
  return (arrayOfWords.slice(0,numberOfWords).join(" "))+"...";
}

export default function SeeMore({
  fullText,
  numberOfWords=50
}){
  const [isToggledText, toggleText] = useState(true);
  return isToggledText ? (
    <Container fluid className="mb-4">
      <p className="mt-4">{CutWords(fullText,numberOfWords)}</p>
      <center>
        <Button color="info" onClick={()=>toggleText(!isToggledText)}>Leer más</Button>
      </center>
    </Container>
  ) : <Container fluid className="mb-4">
        <p className="mt-4">{fullText}</p>
        <center>
          <Button color="info" onClick={()=>toggleText(!isToggledText)}>Leer menos</Button>
        </center>
    </Container>

}