import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {NewPassword} from "../pages/p7-newPassword/NewPassword";
import {SignUp} from "../pages/p3-signUp/SignUp";
import {SignIn} from "../pages/p2-signIn/SignIn";
import {RecoverPassword} from "../pages/p6-recoverPassword/RecoverPassword";
import {Main} from "../pages/p1-main/Main";
import {Profile} from "../pages/p4-profile/Profile";
import {NotFound} from "../pages/p5-notFound/NotFound";
import {TestPage} from "../pages/TestPage";

export enum PATH {
    START_PAGE = '/',
    MAIN = '/main',
    SIGN_IN = '/sign-in',
    SIGN_UP = '/sign-up',
    PROFILE = '/profile',
    NOT_FOUND = '/*',
    RECOVER_PASSWORD = '/recover-password',
    NEW_PASSWORD = '/set-new-password',
    TEST = '/test',
}

export const RoutesApp = () => (
        <div>
            <Routes>
                <Route path={PATH.START_PAGE} element={<Navigate to={PATH.MAIN}/>}/>
                <Route path={PATH.MAIN} element={<Main/>}/>
                <Route path={PATH.SIGN_IN} element={<SignIn/>}/>
                <Route path={PATH.SIGN_UP} element={<SignUp/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={PATH.NOT_FOUND} element={<NotFound/>}/>
                <Route path={PATH.RECOVER_PASSWORD} element={<RecoverPassword/>}/>
                <Route path={PATH.NEW_PASSWORD} element={<NewPassword/>}/>
                <Route path={PATH.TEST} element={<TestPage/>}/>
            </Routes>
        </div>
    )
