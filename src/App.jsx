import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input/Input";

const App = () => {
    return (
        <div className="max-w-md space-y-5 p-5">
            <Input type="text" placeholder="نام کاربری" />

            <Input type="email" placeholder="ایمیل" />

            <Input type="password" placeholder="رمز عبور" />

            <Input type="number" placeholder="سن" />
        </div>
    );
};

export default App;
