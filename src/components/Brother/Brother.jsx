import { useContext } from "react";
import { moneyContext } from "../Grandpa/Grandpa";

const Brother = () => {
    const [money] = useContext(moneyContext);
    return (
        <div>
            <h2>Brother</h2>
            <p>Grandpa: {money}</p>
        </div>
    );
};

export default Brother;