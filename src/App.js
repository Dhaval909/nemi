import Home from "./pages/Home/Home";
import SuperAdminDashbord from "./pages/Super-Admin-Dashbord/SuperAdminDashbord";
import { BrowserRouter as Router, Route, Routes, Link, createBrowserRouter,RouterProvider } from "react-router-dom";
import UserMenuDashbord from "./pages/Admin-Config-Pages/User-Menu-Dashbord/UserMenuDashbord";
import ListofUserRole2 from "./pages/Admin-Config-Pages/List-Of-User-Role-2/ListofUserRole2";
import ListofUserResponsibility2 from "./pages/Admin-Config-Pages/Listof-User-responsibility-2/ListofUserResponsibility2";
import ListPermission2 from "./pages/Admin-Config-Pages/List-Permission-2-SA-User/ListPermission2";
import ViewEmployeeProfile from "./pages/User-Pages/List-of-User/ViewEmployeeProfile";
import AdminMenuDashbord from "./pages/User-Pages/Admin-Menu-Dashbord/AdminMenuDashbord";
import CompanyMenuDashbord from "./pages/Company/Company-Menu-Deshbord/CompanyMenuDashbord";
import CreateCompany from "./pages/Company/Create-Company/CreateCompany";
import ListofCompanies from "./pages/Company/Listof-Companies/ListofCompanies";
import CompanyAdminDashbord from "./pages/Company-Admin/Company-Admin-Dashbord/CompanyAdminDashbord";
import CreateSite from "./pages/Company-Admin/Site/CreateSite";
import ListOfSites from "./pages/Company-Admin/Site/ListOfSites";
import CreateStudy from "./pages/Company-Admin/Study/CreateStudy";
import ListOfStudy from "./pages/Company-Admin/Study/ListOfStudy";
import CreateUser from "./pages/Company-Admin/User/CreateUser";
import ViewExternelUserProfile from "./pages/Company-Admin/User/ViewExternelUserProfile";
import DelegationLog from "./pages/Admin-Config-Pages/DelegationLog";
import EditProfile from "./pages/Update-User-Profile/EditProfile";
import NoOfCompanies from "./pages/Analytics/NoOfCompanies";
import NoofUsersPerRole from "./pages/Analytics/NoofUsersPerRole";
import NoOfStudies from "./pages/Analytics/NoOfStudies";
import NoOfSites from "./pages/Analytics/NoOfSites";
import NoofActiveUsers from "./pages/Analytics/NoofActiveUsers";
import AnalyticDashbord from "./pages/Analytics/AnalyticDashbord";
import UploadDocument from "./pages/Upload-Document/UploadDocument";
import ReviewDelegationLog from "./pages/Upload-Document/ReviewDelegationLog";
import ReviewISF from "./pages/Upload-Document/ReviewISF";
import ReviewTrainingLog from "./pages/Upload-Document/ReviewTrainingLog";
import UploadDocumentStudy from "./pages/Upload-Document/UploadDocumentStudy";
import PrivateRoutes from "./component/PrivateRoutes";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    { element:<PrivateRoutes/>,
      children: [
        { path: "superadmindashbord", element: <SuperAdminDashbord /> },
        { path: "edit-profile", element: <EditProfile /> },
        { path: "user-menu-deshbord", element: <UserMenuDashbord /> },
        { path: "listof-user-role2", element: <ListofUserRole2 /> },
        { path: "listof-permission2", element: <ListPermission2 /> },
        {
          path: "listof-user-responsibility2",
          element: <ListofUserResponsibility2 />,
        },
        {
          path: "admin-menudashbord",
          element: <AdminMenuDashbord />,
        },
        {
          path: "viewemployeeprofile",
          element: <ViewEmployeeProfile />,
        },
        { path: "companymenudashbord", element: <CompanyMenuDashbord /> },
        { path: "createcompany", element: <CreateCompany /> },
        { path: "listofcompanies", element: <ListofCompanies /> },
        { path: "company-admin-dashbord", element: <CompanyAdminDashbord /> },
        { path: "create-site", element: <CreateSite /> },
        { path: "listof-sites", element: <ListOfSites /> },
        { path: "create-study", element: <CreateStudy /> },
        { path: "listof-study", element: <ListOfStudy /> },
        { path: "create-user", element: <CreateUser /> },
        { path: "delegation", element: <DelegationLog /> },
        { path: "list-user", element: <ViewExternelUserProfile /> },
        { path: "analytic-dashbord", element: <AnalyticDashbord /> },
        { path: "no-of-companies", element: <NoOfCompanies /> },
        { path: "no-of-users-asper-role", element: <NoofUsersPerRole /> },
        { path: "no-of-studies", element: <NoOfStudies /> },
        { path: "no-of-sites", element: <NoOfSites /> },
        { path: "no-of-active-users", element: <NoofActiveUsers /> },
        { path: "upload-document", element: <UploadDocument /> },
        { path: "review-delegationlog", element: <ReviewDelegationLog /> },
        { path: "review-ISF", element: <ReviewISF /> },
        { path: "review-training-log", element: <ReviewTrainingLog /> },
        { path: "upload-document-study", element: <UploadDocumentStudy /> },
      ],
    },
  ]);




  return (
    <>
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
      <div id="layout-wrapper">
        <RouterProvider router={router}>
        
        </RouterProvider>
        {/* <Router>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/edit-profile" element={<EditProfile />}></Route>
            <Route
              exact
              path="/superadmindashbord"
              element={<SuperAdminDashbord />}
            ></Route>
            <Route
              exact
              path="/user-menu-deshbord"
              element={<UserMenuDashbord />}
            ></Route>
            <Route
              exact
              path="/listof-user-role2"
              element={<ListofUserRole2 />}
            ></Route>
            <Route
              exact
              path="/listof-user-responsibility2"
              element={<ListofUserResponsibility2 />}
            ></Route>
            <Route
              exact
              path="/listof-permission2"
              element={<ListPermission2 />}
            ></Route>
            <Route
              exact
              path="/admin-menudashbord"
              element={<AdminMenuDashbord />}
            ></Route>
            <Route
              exact
              path="/viewemployeeprofile"
              element={<ViewEmployeeProfile />}
            ></Route>
            <Route
              exact
              path="/companymenudashbord"
              element={<CompanyMenuDashbord />}
            ></Route>
            <Route
              exact
              path="/createcompany"
              element={<CreateCompany />}
            ></Route>
            <Route
              exact
              path="/listofcompanies"
              element={<ListofCompanies />}
            ></Route>
            <Route
              exact
              path="/company-admin-dashbord"
              element={<CompanyAdminDashbord />}
            ></Route>
            <Route exact path="/create-site" element={<CreateSite />}></Route>
            <Route exact path="/listof-sites" element={<ListOfSites />}></Route>
            <Route exact path="/create-study" element={<CreateStudy />}></Route>
            <Route exact path="/listof-study" element={<ListOfStudy />}></Route>
            <Route exact path="/create-user" element={<CreateUser />}></Route>
            <Route exact path="/delegation" element={<DelegationLog />}></Route>
            <Route
              exact
              path="/list-user"
              element={<ViewExternelUserProfile />}
            ></Route>
            <Route
              exact
              path="/analytic-dashbord"
              element={<AnalyticDashbord />}
            ></Route>
            <Route
              exact
              path="/no-of-companies"
              element={<NoOfCompanies />}
            ></Route>
            <Route
              exact
              path="/no-of-users-asper-role"
              element={<NoofUsersPerRole />}
            ></Route>
            <Route
              exact
              path="/no-of-studies"
              element={<NoOfStudies />}
            ></Route>
            <Route exact path="/no-of-sites" element={<NoOfSites />}></Route>
            <Route
              exact
              path="/no-of-active-users"
              element={<NoofActiveUsers />}
            ></Route>
            <Route
              exact
              path="/upload-document"
              element={<UploadDocument />}
            ></Route>
            <Route
              exact
              path="/review-delegationlog"
              element={<ReviewDelegationLog />}
            ></Route>
            <Route exact path="/review-ISF" element={<ReviewISF />}></Route>
            <Route
              exact
              path="/review-training-log"
              element={<ReviewTrainingLog />}
            ></Route>
            <Route
              exact
              path="/upload-document-study"
              element={<UploadDocumentStudy />}
            ></Route>
          </Routes>
          <h5>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/delegation">delegation</Link>
              </li>
              <li>
                <Link to="/superadmindashbord">superadmindashbord</Link>
              </li>
              <li>
                <Link to="/user-menu-deshbord">user-menu-deshbord</Link>
              </li>
              <li>
                <Link to="/listof-user-role2">listof-user-role2</Link>
              </li>
              <li>
                <Link to="/listof-user-responsibility2">
                  listof-user-responsibility2
                </Link>
              </li>
              <li>
                <Link to="/listof-permission2">listof-permission2</Link>
              </li>
              <li>
                <Link to="/admin-menudashbord">admin-menudashbord</Link>
              </li>
              <li>
                <Link to="/viewemployeeprofile">viewemployeeprofile</Link>
              </li>
              <li>
                <Link to="/companymenudashbord">companymenudashbord</Link>
              </li>
              <li>
                <Link to="/createcompany">createcompany</Link>
              </li>
              <li>
                <Link to="/listofcompanies">listofcompanies</Link>
              </li>
              <li>
                <Link to="/company-admin-dashbord">company-admin-dashbord</Link>
              </li>
              <li>
                <Link to="/create-site">create-site</Link>
              </li>
              <li>
                <Link to="/listof-sites">listof-sites</Link>
              </li>
              <li>
                <Link to="/create-study">create-study</Link>
              </li>
              <li>
                <Link to="/listof-study">listof-study</Link>
              </li>
              <li>
                <Link to="/create-user">create-user</Link>
              </li>
              <li>
                <Link to="/list-user">ViewExternelUserProfile</Link>
              </li>
              <li>
                <Link to="/analytic-dashbord">/analytic-dashbord</Link>
              </li>
              <li>
                <Link to="/no-of-companies">/no-of-companies</Link>
              </li>
              <li>
                <Link to="/no-of-users-asper-role">
                  /no-of-users-asper-role
                </Link>
              </li>
              <li>
                <Link to="/no-of-studies">/no-of-studies</Link>
              </li>
              <li>
                <Link to="/no-of-sites">/no-of-sites</Link>
              </li>
              <li>
                <Link to="/no-of-active-users">/no-of-active-users</Link>
              </li>
              <li>
                <Link to="/upload-document">/upload-document</Link>
              </li>
              <li>
                <Link to="/review-delegationlog">/review-delegationlog</Link>
              </li>
              <li>
                <Link to="/review-ISF">/review-ISF</Link>
              </li>
              <li>
                <Link to="/review-training-log">/review-training-log</Link>
              </li>
              <li>
                <Link to="/upload-document-study">/upload-document-study</Link>
              </li>
            </ul>
          </h5>
        </Router> */}
      </div>
    </>
  );
}

export default App;
