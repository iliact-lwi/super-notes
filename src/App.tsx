import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Container } from "react-bootstrap";

import HomePage from "./pages/HomePage";
import NotesPage from "./pages/NotesPage";
import ThemesPage from "./pages/ThemesPage";
import SettingsPage from "./pages/SettingsPage";

const MotivationsPage = lazy(() => import("./pages/about/MotivationsPage"));
const FeedbackPage = lazy(() => import("./pages/about/FeedbackPage"));
const ProjectsPage = lazy(() => import("./pages/about/ProjectsPage"));

import NavbarComponent from "./components/navbar/NavbarComponent";
import FooterComponent from "./components/footer/FooterComponent";
import SuspenseComponent from "./components/suspense/SuspenseComponent";

const App: React.FunctionComponent = () => {
    return (
        <BrowserRouter>
            <Container fluid className="p-0 position-fixed index-100">
                <NavbarComponent />
            </Container>
            <Container fluid className="p-0">
                <Switch>
                    <Route component={ HomePage } path="/" exact />
                    <Route component={ NotesPage } path="/notes" />
                    <Route component={ ThemesPage } path="/themes" />
                    <Route component={ SettingsPage } path="/settings" />
                    <Route render={ 
                        () => {
                            return (
                                <Suspense fallback={ <SuspenseComponent /> }>
                                    <FeedbackPage />
                                </Suspense>
                            )
                        }
                     } path="/about/feedback" />
                      <Route render={ 
                        () => {
                            return (
                                <Suspense fallback={ <SuspenseComponent /> }>
                                    <MotivationsPage />
                                </Suspense>
                            )
                        }
                     } path="/about/motivations" />
                      <Route render={ 
                        () => {
                            return (
                                <Suspense fallback={ <SuspenseComponent /> }>
                                    <ProjectsPage />
                                </Suspense>
                            )
                        }
                     } path="/about/projects" />
                </Switch>  
            </Container>
            <Container fluid className="p-0">
                <FooterComponent /> 
            </Container>  
        </BrowserRouter>  
    )
}

export default App;