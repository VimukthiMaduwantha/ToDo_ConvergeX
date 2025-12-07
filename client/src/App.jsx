import { createTheme, ThemeProvider } from "@mui/material";
import ToDoTask from "./components/ToDoTask"

// Set theme on MUI
const theme = createTheme({
  palette: {
    primary: { main: "#0102F8" },
    secondary: { main: "#0102F8" },
  },
});

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <ToDoTask />
      </ThemeProvider>
    </>
  )
}

export default App
