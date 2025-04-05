import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./scenes/global/Sidebar";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import Calendar from "./scenes/calendar";

function App() {
    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Box display="flex" width="100vw" height="100vh">
                    <Sidebar />
                    <Box
                        component="main"
                        flex="1"
                        height="100vh"
                        overflow="auto"
                    >
                        <Topbar />
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/team" element={<Team />} />
                            <Route path="/contacts" element={<Contacts />} />
                            <Route path="/invoices" element={<Invoices />} />
                            <Route path="/form" element={<Form />} />
                            <Route path="/calendar" element={<Calendar />} />
                            <Route path="/faq" element={<FAQ />} />
                            <Route path="/bar" element={<Bar />} />
                            <Route path="/pie" element={<Pie />} />
                            <Route path="/line" element={<Line />} />{" "}
                            <Route path="/geography" element={<Geography />} />
                        </Routes>
                    </Box>
                </Box>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
