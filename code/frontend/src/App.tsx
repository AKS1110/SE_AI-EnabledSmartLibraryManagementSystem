import StudentDashboard from "./pages/StudentDashboard";
import { StudentLoansProvider } from "./hooks/useStudentLoans";

function App() {
  return (
    <StudentLoansProvider>
      <StudentDashboard rollNo="1024160010" />
    </StudentLoansProvider>
  );
}

export default App;