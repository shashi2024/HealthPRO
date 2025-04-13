import './index.css';
import HomeScreen from "./screens/HomeScreen.jsx";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store.js";  
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//pasindu

import Scan from "./screens/Management/Medical_Record/Scan.jsx";
import RecordForm from "./screens/Management/Medical_Record/Recordform.jsx";
import Recordshow from "./screens/Management/Medical_Record/Recordshow.jsx";
import Editrecord from "./screens/Management/Medical_Record/Editrecord.jsx";

import UpdatePatient from "./screens/Management/Patients/UpdatePatient.jsx";

import AddAmbulanceForm from "./screens/Management/AddAmbulanceForm";
import UpdateAmbulanceForm from "./screens/Management/UpdateAmbulanceForm.jsx";
import Assign from "./screens/Management/Assign.jsx";
import EmergencyReport from "./screens/Management/EmergencyReport.jsx";
import Ambulances from "./screens/Management/Ambulances.jsx";
import Emergency from "./screens/Management/Emergency.jsx";
import Patients from "./screens/Management/Patients.jsx";
import Reports from "./screens/Management/Reports.jsx";

import MedicalRecordScreen from "./screens/Patient/MedicalRecordScreen.jsx";

import EmergencyRequestScreen from "./screens/EmergencyRequestScreen.jsx";
import MapScreen from "./screens/MapScreen.jsx";
import HomeScreen from "./screens/HomeScreen";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* Public/General */}
      <Route index element={<HomeScreen />} />
      <Route path="/map" element={<MapScreen />} />
      <Route path="/emergency-request" element={<EmergencyRequestScreen />} />

      {/* Patient Side */}
      <Route path="/patient/medical-record" element={<MedicalRecordScreen />} />

      {/* Management - Medical Record */}
      <Route path="/management/medical-record/scan" element={<Scan />} />
      <Route path="/management/medical-record/form" element={<RecordForm />} />
      <Route path="/management/medical-record/view" element={<Recordshow />} />
      <Route path="/management/medical-record/edit" element={<Editrecord />} />

      {/* Management - Patients */}
      <Route path="/management/patients" element={<Patients />} />
      <Route path="/management/patients/update" element={<UpdatePatient />} />

      {/* Management - Ambulance */}
      <Route path="/management/ambulances" element={<Ambulances />} />
      <Route path="/management/ambulances/add" element={<AddAmbulanceForm />} />
      <Route path="/management/ambulances/update" element={<UpdateAmbulanceForm />} />

      {/* Management - Emergency */}
      <Route path="/management/emergency" element={<Emergency />} />
      <Route path="/management/emergency/assign" element={<Assign />} />
      <Route path="/management/emergency/report" element={<EmergencyReport />} />

      {/* Reports */}
      <Route path="/management/reports" element={<Reports />} />
    </Route>
  )
);



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);


