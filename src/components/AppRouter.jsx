import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '.././pages/LoginPage/LoginPage';
import Modal from './UI/Modal/Modal';
import RegistrationForm from '.././forms/RegForm/RegForm';
import RegistrationStep1 from '../forms/RegForm/RegSteps/RegStep1/RegStep1';
import RegistrationStep2 from '../forms/RegForm/RegSteps/RegStep2/RegStep2';
import RegistrationStep3 from '../forms/RegForm/RegSteps/RegStep3/RegStep3';

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LoginPage />}>
                    <Route
                        path="registration"
                        element={
                            <Modal>
                                <RegistrationForm />
                            </Modal>
                        }>
                        <Route path="step1" element={<RegistrationStep1 />} />
                        <Route path="step2" element={<RegistrationStep2 />} />
                        <Route path="step3" element={<RegistrationStep3 />} />
                    </Route>
                </Route>
            </Routes>
        </div>
    );
};

export default AppRouter;
