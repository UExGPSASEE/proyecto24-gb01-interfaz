import logo from './logo.svg';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import LogIn from './Views/login';
import SignUp from './Views/SignUp';
import Header from './Components/Header';

import Language from './Views/Estadistica/Language';
import FormCreateLanguage from './Components/Languages/FormCreateLanguage';
import FormDeleteLanguage from './Components/Languages/FormDeleteLanguage';
import FormUpdateLanguage from './Components/Languages/FormUpdateLanguage';

import Profile from './Views/Estadistica/Profile';
import FormCreateProfile from './Components/Profiles/FormCreateProfile';
import FormDeleteProfile from './Components/Profiles/FormDeleteProfile';
import FormUpdateProfile from './Components/Profiles/FormUpdateProfile';

import User from './Views/Estadistica/User';
import FormCreateUser from './Components/Users/FormCreateUser';
import FormDeleteUser from './Components/Users/FormDeleteUser';
import FormUpdateUser from './Components/Users/FormUpdateUser';
import { UserContextProvider } from './context/UserContext';
import Configuración from './Views/User/Configuración';
import ConfirmDeleteUser from './Views/User/ConfirmDeleteUser';
import FormCreateCategory from './Components/Categories/FormCreateCategory';
import FormGetAllCategories from './Components/Categories/FormGetAllCategories';
import FormCreateChapter from './Components/Chapters/FormCreateChapter';
import FormUpdateChapter from './Components/Chapters/FormUpdateChapter';
import FormDeleteChapter from './Components/Chapters/FormDeleteChapter';
import FormCreateMovie from './Components/Movies/FormCreateMovie';
import FormDeleteMovie from './Components/Movies/FormDeleteMovie';
import FormUpdateMovie from './Components/Movies/FormUpdateMovie';
import FormGetAllMovies from './Components/Movies/FormGetAllMovies';
import FormCreateParticipant from './Components/Participants/FormCreateParticipant';
import FormDeleteParticipant from './Components/Participants/FormDeleteParticipant';
import FormUpdateParticipant from './Components/Participants/FormUpdateParticipant';
import FormGetAllParticipants from './Components/Participants/FormGetAllParticipants';
import FormCreateReview from './Components/Reviews/FormCreateReview';
import DeleteReview from './Components/Reviews/FormDeleteReview';
import UpdateReview from './Components/Reviews/FormUpdateReview';
import GetAllReviews from './Components/Reviews/FormGetAllReviews';
import AddSeasonForm from './Components/Seasons/FormCreateSeason';
import DeleteSeasonForm from './Components/Seasons/FormDeleteSeason';
import UpdateSeasonForm from './Components/Seasons/FormUpdateSeason';
import GetSeasonByIdForm from './Components/Seasons/FormGetSeasonByID';
import AddSeriesForm from './Components/Series/FormCreateSeries';
import DeleteSeries from './Components/Series/FormDeleteSeries';
import ModifySeriesForm from './Components/Series/FormUpdateSeries';
import AllSeries from './Components/Series/FormGetAllSeries';
import AddTrailer from './Components/Trailers/FormCreateTrailer';
import DeleteTrailer from './Components/Trailers/FormDeleteTrailer';
import UpdateTrailer from './Components/Trailers/FormUpdateTrailer';
import GetTrailerById from './Components/Trailers/FormGetTrailerByID';


function App() {
  
  return (
    <UserContextProvider>
    
    <BrowserRouter>
                  <Header />
                    
                    
                
                    <Routes>
                      <Route path="/app" > 
                        
                    
                        
                        
                        <Route path="login" element={<LogIn />} /> 
                        <Route path="signup" element={<SignUp/>} /> 
                        <Route path="languages" element={<Language />} > 
                        </Route>
                        <Route path="profiles" element={<Profile />} /> 
                        
                        
                        <Route path='languages/create' element={<FormCreateLanguage/>}/>
                        <Route path='languages/delete' element={<FormDeleteLanguage/>}/>
                        <Route path='languages/update' element={<FormUpdateLanguage/>}/>
                        <Route path='profiles/create' element={<FormCreateProfile/>}/>
                        <Route path='profiles/delete' element={<FormDeleteProfile/>}/>
                        <Route path='profiles/update' element={<FormUpdateProfile/>}/>
                        <Route path='users/create' element={<FormCreateUser/>}/>
                        <Route path='user/config' element={<Configuración/>}/>
                        <Route path='deleteUser' element={<FormDeleteUser/>}/>
                        <Route path='users/config/saved' element={<h1>MI LISTA DE GUARDADOS</h1>}/>
                        <Route path='user/config/editUser' element={<FormUpdateUser/>}/>
                        
                        <Route path='user/config/deleteUser' element={<ConfirmDeleteUser/>}/>
                        
                        {/* Languages */}
    <Route path="languages/create" element={<FormCreateLanguage />} />
    <Route path="languages/delete" element={<FormDeleteLanguage />} />
    <Route path="languages/update" element={<FormUpdateLanguage />} />
    <Route path="languages" element={<Language />} />

    {/* Profiles */}
    <Route path="profiles/create" element={<FormCreateProfile />} />
    <Route path="profiles/delete" element={<FormDeleteProfile />} />
    <Route path="profiles/update" element={<FormUpdateProfile />} />
    <Route path="profiles" element={<Profile />} />

    {/* Categories */}
    <Route path="categories/create" element={<FormCreateCategory />} />
    <Route path="categories" element={<FormGetAllCategories />} />

    {/* Chapters */}
    <Route path="chapters/create" element={<FormCreateChapter />} />
    <Route path="chapters/delete" element={<FormDeleteChapter />} />
    <Route path="chapters/update" element={<FormUpdateChapter />} />
    <Route path="chapters" element={<FormGetAllCategories />} />

    {/* Movies */}
    <Route path="movies/create" element={<FormCreateMovie />} />
    <Route path="movies/delete" element={<FormDeleteMovie />} />
    <Route path="movies/update" element={<FormUpdateMovie />} />
    <Route path="movies" element={<FormGetAllMovies />} />

    {/* Participants */}
    <Route path="participants/create" element={<FormCreateParticipant />} />
    <Route path="participants/delete" element={<FormDeleteParticipant />} />
    <Route path="participants/update" element={<FormUpdateParticipant />} />
    <Route path="participants" element={<FormGetAllParticipants />} />

    {/* Reviews */}
    <Route path="reviews/create" element={<FormCreateReview />} />
    <Route path="reviews/delete" element={<DeleteReview />} />
    <Route path="reviews/update" element={<UpdateReview />} />
    <Route path="reviews" element={<GetAllReviews />} />

    {/* Seasons */}
    <Route path="seasons/create" element={<AddSeasonForm />} />
    <Route path="seasons/delete" element={<DeleteSeasonForm />} />
    <Route path="seasons/update" element={<UpdateSeasonForm />} />
    <Route path="seasons" element={<GetSeasonByIdForm />} />

    {/* Series */}
    <Route path="series/create" element={<AddSeriesForm />} />
    <Route path="series/delete" element={<DeleteSeries />} />
    <Route path="series/update" element={<ModifySeriesForm />} />
    <Route path="series" element={<AllSeries />} />

    {/* Trailers */}
    <Route path="trailers/create" element={<AddTrailer />} />
    <Route path="trailers/delete" element={<DeleteTrailer />} />
    <Route path="trailers/update" element={<UpdateTrailer />} />
    <Route path="trailers" element={<GetTrailerById />} />
                      </Route>
                    
                    </Routes>

                </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
