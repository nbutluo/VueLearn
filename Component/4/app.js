import Todo from "./Components/Todo.js";
import db from "./data/db.js";

export default {
    components:{Todo},
    data() {
        return {
            db
        }
    }
}