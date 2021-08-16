import Head from "next/head";
import { UseContextHook } from "../hooks/useContext";
import { UseEffectHook } from "../hooks/useEffect";
import { UseReducerHookWithThirdArgument } from "../hooks/useReducer";
import { UseStateHook } from "../hooks/useState";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Learn React Hooks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>
        Learn React Hooks in
        <a
          href="https://github.com/AndriusMrc/react-hooks"
          style={{ paddingLeft: "10px" }}
        >
          GitHub
        </a>
      </h1>
      <br />
      <h2>useState</h2>
      <UseStateHook />
      <hr style={{ width: "50%", marginLeft: "0" }} />
      <h2>useEffect</h2>
      <UseEffectHook />
      <hr style={{ width: "50%", marginLeft: "0" }} />
      <h2>useContext</h2>
      <UseContextHook />
      <hr style={{ width: "50%", marginLeft: "0" }} />
      <h2>useReducer</h2>
      <UseReducerHookWithThirdArgument initialCount={5} />
      <hr style={{ width: "50%", marginLeft: "0" }} />
    </div>
  );
};

export default HomePage;
