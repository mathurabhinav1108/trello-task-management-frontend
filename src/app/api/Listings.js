import { Component } from "react";
import Api from "./Api";
class Listings extends Component {
  // Signup api
  async Signup(data) {
    return Api.post("/user/signup", data);
  }
  async Login(data) {
    return Api.post("/user/login", data);
  }
  async AddTask(data) {
    return Api.post("/task/add", data);
  }
  async GetTasks() {
    return Api.get("/task/get");
  }
  async DeleteTask(data) {
    return Api.post("task/delete", data);
  }
  async MoveTask(data) {
    return Api.post("task/move", data);
  }
   
  render() {
    return (
      <div>
        <></>
      </div>
    );
  }
}

export default Listings;