import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";


function App() {
  const [theme, colorMode] = useMode();
  return (<ColorModeContext.Provider value ={colorMode} >
    <ThemeProvider theme = {theme}>
      <CssBaseline/> //****to reset the css to basics
    <div className="app">
      <main className="content"> </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
