import React from "react";
import { render } from "react-dom";
import {
  Deck,
  Slide,
  Heading,
  Link,
  Text,
  Appear,
  Code
} from "spectacle";
import createTheme from "spectacle/lib/themes/default";
import CanvasSlide from "./CanvasSlide";
import midiControl from "./midiControl";

const theme = createTheme(
  {
    primary: "#050505",
    secondary: "#fbfbfb",
    tertiary: "#fbfbfb",
    quarternary: "#fbfbfb"
  },
  {
    primary: "'DejaVu Sans', Helvetica, sans-serif"
  }
);

const defaultSlideProps = {
  align: "flex-start top",
  className: "default-slide"
};

function AppearingBlock(props) {
  return (
    <Appear {...props}>
      <div>{props.children}</div>
    </Appear>
  );
}

function SmallText(props) {
  let className = `small-text ${props.className}`;
  return (
    <Text {...props} className={className}>
      {props.children}
    </Text>
  );
}

function H1(props) {
  return (
    <Heading caps fit size={1} lineHeight={1.25} {...props}>
      {props.children}
    </Heading>
  );
}

function H2(props) {
  return (
    <Heading caps size={2} lineHeight={1.25} textAlign="left" {...props}>
      {props.children}
    </Heading>
  );
}

function H3(props) {
  return (
    <Heading size={3} lineHeight={1.25} textAlign="center" {...props}>
      {props.children}
    </Heading>
  );
}

const controls = midiControl("Launch Control MIDI 1");

function Presentation() {
  return (
    <Deck theme={theme} transition={["slide"]} progress="none" controls={false}>
      <Slide {...defaultSlideProps}>
        <H1>Pseudorandom</H1>
        <H1>&nbsp;&nbsp;&nbsp;&nbsp;Pleasures&nbsp;&nbsp;&nbsp;&nbsp;</H1>
        <Text italic>— eller hvordan temme tilfeldighet</Text>
        <SmallText>Stian Veum Møllersen / @mollerse</SmallText>
        <SmallText>Digital Historieutvikling NRK</SmallText>
      </Slide>

      <Slide {...defaultSlideProps}>
        <H2>Generative Systemer</H2>
        <Text textAlign="left">
          Generative systemer er konstruksjoner som produserer et resultat
          basert på et sett med regler.
        </Text>
        <br />
        <Appear>
          <Text textAlign="left">
            Kombinatoriske eksplosjoner gir kompleks og utforutsigbar output,
            selv med relativt enkle regler.
          </Text>
        </Appear>
      </Slide>

      <Slide {...defaultSlideProps}>
        <H2>Generativ grafikk</H2>
        <Text textAlign="left">
          Generativ grafikk, eller «procedural graphics», er en type generativt
          system.
        </Text>
        <br />
        <Appear>
          <Text textAlign="left">
            Brukes i alt fra spill, film og grafikk til 3D-printing og lyd.
          </Text>
        </Appear>
      </Slide>

      <Slide {...defaultSlideProps} className="canvas-slide">
        <CanvasSlide controls={controls} sketch={"randomline"} />
      </Slide>

      <Slide {...defaultSlideProps} />

      <Slide {...defaultSlideProps}>
        <H2>Tilfeldighet</H2>
        <Text textAlign="left">
          En fin måte å oppnå kombinatorisk eksplosjon. Mulige utfall av et
          generativt system basert på tilfeldighet er tilnærmet uendelig.
        </Text>
        <br />
        <Appear>
          <Text textAlign="left">Det er bare et problem.</Text>
        </Appear>
      </Slide>

      <Slide {...defaultSlideProps} align="center center">
        <H3>Menesker liker generelt ikke ting som er helt tilfeldige.</H3>
      </Slide>

      <Slide {...defaultSlideProps} className="canvas-slide">
        <CanvasSlide controls={controls} sketch={"randomline"} />
      </Slide>

      <Slide {...defaultSlideProps} />

      <Slide {...defaultSlideProps}>
        <H2>Pseudorandom</H2>
        <Text textAlign="left">
          Det finnes spesialkonstruerte funksjoner for å generere visuelt
          behagelig, men likevel tilfeldig støy: Pseudorandom Number Generators
          (PRNG).
        </Text>
      </Slide>

      <Slide {...defaultSlideProps} className="canvas-slide">
        <CanvasSlide controls={controls} sketch={"simplex"} />
      </Slide>

      <Slide {...defaultSlideProps} />

      <Slide {...defaultSlideProps}>
        <H2>Ken Perlin</H2>
        <Text textAlign="left">
          Opphavsmannen til den mest kjente metoden for pseudorandom innen
          grafikk: Perlin Noise.
        </Text>
        <br />
        <Appear>
          <Text textAlign="left">
            Oppfunnet i 1982 til bruk i filmen Tron, som han også vant en
            Technical Achievement Oscar for i 1997.
          </Text>
        </Appear>
      </Slide>

      <Slide {...defaultSlideProps}>
        <H2>Simplex Noise</H2>
        <Text textAlign="left">
          Arvtageren til Perlin Noise. Samme prinsipp, bare kjappere og med
          færre visuelle artefakter.
        </Text>
        <br />
        <Appear>
          <Text textAlign="left">Oppfunnet i 2001 av Ken Perlin.</Text>
        </Appear>
      </Slide>

      <Slide {...defaultSlideProps} className="canvas-slide">
        <CanvasSlide controls={controls} sketch={"simplex"} />
      </Slide>

      <Slide {...defaultSlideProps} />

      <Slide {...defaultSlideProps}>
        <H2>Gradient noise</H2>
        <Text textAlign="left">
          Prinsippet bak Perlin og Simplex noise kalles gjerne gradient noise.
        </Text>
        <br />
        <Appear>
          <Text textAlign="left">
            Generaliserer utrolig bra til flere dimensjoner.
          </Text>
        </Appear>
      </Slide>

      <Slide {...defaultSlideProps} className="canvas-slide">
        <CanvasSlide controls={controls} sketch={"2d"} />
      </Slide>

      <Slide {...defaultSlideProps} />

      <Slide {...defaultSlideProps}>
        <H2>Nyttig</H2>
        <Text textAlign="left">
          Dette kan brukes til utrolig mange ting. Fordi vi får verdier i{" "}
          <Code>[-1, 1]</Code> kan det mappes til nesten hva som helst.
        </Text>
      </Slide>

      <Slide {...defaultSlideProps}>
        <H2>Effekter</H2>
        <Text textAlign="left">
          Simplex noise kan utnyttes til å lage mer interessante effekter, feks
          linjer som ser mer naturlige ut.
        </Text>
        <br />
        <Appear>
          <Text textAlign="left">
            For å gjøre dette, låner vi noen triks fra additiv syntese.
          </Text>
        </Appear>
      </Slide>

      <Slide {...defaultSlideProps} className="canvas-slide">
        <CanvasSlide controls={controls} sketch={"simplexoctaves"} />
      </Slide>

      <Slide {...defaultSlideProps} />

      <Slide {...defaultSlideProps}>
        <H2>Naturlig</H2>
        <Text textAlign="left">
          Den forutsigbare oppførselen til Simplex noise lar oss øke den
          visuelle kompleksiteten, uten å miste det naturlige preget.
        </Text>
      </Slide>

      <Slide {...defaultSlideProps}>
        <H2>Kreativ bruk</H2>
        <Text textAlign="left">
          Siden vi har en måte å lage gøyale linjer, så burde vi jo gjøre noe kreativt med dem.
        </Text>
        <br />
        <Appear>
          <Text textAlign="left">Noe enkelt &rarr; Parametriser &rarr; Multipliser &rarr; Animer</Text>
        </Appear>
      </Slide>

      <Slide {...defaultSlideProps} className="canvas-slide">
        <CanvasSlide controls={controls} sketch={"joydivision"} />
      </Slide>

      <Slide {...defaultSlideProps} />

      <Slide {...defaultSlideProps} align="center center">
        <Heading caps size={1}>
          Takk for meg!
        </Heading>
        <SmallText>Stian Veum Møllersen / @mollerse</SmallText>
        <SmallText>Digital Historieutvikling NRK</SmallText>
        <br />
        <SmallText>slides: <Link href="https://mollerse.github.io/capracon-2019-presentation/">mollerse.github.io/capracon-2019-presentation</Link></SmallText>
        <SmallText>code: <Link href="https://github.com/mollerse/capracon-2019-presentation">github/mollerse/capracon-2019-presentation</Link></SmallText>
      </Slide>
    </Deck>
  );
}
const mount = document.createElement("div");
document.body.appendChild(mount);
render(<Presentation />, mount);
