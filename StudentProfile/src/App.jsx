import StudentProfile from "./StudentProfile";
import Header from "./Header";
import Footer from "./Footer";
import Skills from "./Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div>
       <StudentProfile 
       Name="Rahul"
       Age={22}
       Course="B.Sc"
       City="Nashik"
       />
       <StudentProfile
       Name="Priya"
       Age={24}
       Course="BCA"
       City="Pune"
       />
       <StudentProfile 
       Name="Amit"
       Age={26}
       Course="B.Com"
       City="Mumbai"
       />
       <Skills/>
       </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

     