import { Socket } from "socket.io";
import socketIO from "socket.io";
import { UsersList } from "../classes/users-list";
import { User } from "../classes/user";

export const usersConnected = new UsersList();

export const connectClient = (client: Socket) => {
  const user = new User(client.id);
  usersConnected.add(user);
};

export const disconnect = (client: Socket) => {
  client.on("disconnect", () => {
    console.log("Client disconnected");
    usersConnected.removeUser(client.id);
  });
};

// Listen to messages
export const message = (client: Socket, io: socketIO.Server) => {
  client.on("message", (payload: { from: string; body: string }) => {
    console.log("Message received", payload);
    io.emit("new-message", payload);
  });
};

// Setup user
export const setupUser = (client: Socket) => {
  client.on("setup-user", (payload: { name: string }, callback: Function) => {
    usersConnected.updateName(client.id, payload.name);

    callback({
      ok: true,
      message: `User ${payload.name} was initialized`,
    });
  });
};
