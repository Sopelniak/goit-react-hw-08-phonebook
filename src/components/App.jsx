import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectIsFetchingCurrentUser } from 'redux/auth/auth-selectors';
import { fetchCurrentUser } from 'redux/auth/authOparations';
import { Layout } from './Layout/Layout';
import { PublicRoute } from 'HOCs/PublicRoute';
import { HomePage } from 'pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { PrivateRoute } from 'HOCs/PrivateRoute';
import { ContactsPage } from 'pages/ContactsPage/ContactsPage';

export const App = () => {
  // const isFetchingCurrentUser = useSelector(selectIsFetchingCurrentUser);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchCurrentUser());
  // }, [dispatch]);

  return (
    <>
    <p>gggg</p>
      {/* {!isFetchingCurrentUser && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={   
                <PublicRoute>
                  <HomePage />
                </PublicRoute>
              }
            />
            <Route
              path="register"
              element={
                <PublicRoute restricted>
                  <RegisterPage />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute restricted>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      )} */}
    </>
  );
};
// function App() {
//   const contacts = useSelector(selectContacts);
//   const dispatch = useDispatch();

//   useEffect(()=>{
//     dispatch(fetchContacts())
//   },[dispatch])

//   return (
//     <>
//       <Section title="Phonebook">
//         <AddContactForm />
//       </Section>
//       {contacts.length > 0 && (
//         <Section title="Contacts">
//           <Filter />
//           <Contacts />
//         </Section>
//       )}
//     </>
//   );
// }
