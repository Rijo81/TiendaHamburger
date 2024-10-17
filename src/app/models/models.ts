import { ModelsHome } from "./home.models";
import { ModelsStore } from "./store.models";
import { ModelsNotifications } from "./notifications.models";
import {ModelsContact} from "./contact.models";

export namespace Models{
  export import Home = ModelsHome;
  export import Store = ModelsStore;
  export import Notifications = ModelsNotifications;
  export import Contact = ModelsContact;
}
