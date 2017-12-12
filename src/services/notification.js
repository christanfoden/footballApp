
export const NOTIF_WISHLIST_CHANGED = "notif_wishlist_chaged";

var observers = {};
let instance = null;

class NotificationService {
  constructor() {
    if (!instance) {
      instance = this;
    }

    return instance;
  }

  postNotification = (notifName, data) => {
    let obs = observers[notifName];
    for (var x = 0; x < obs.length; x++) {
      var obj = obs[x];
      obj.callback(data);
    }
  }

  removeObserver = (observer, notifName) => {
    var obs = observers[notifName];

    if (obs) {
      for (var x = 0; x < obs.length; x++) {
        if (observer === obs[x].observer) {
          obs.splice(x, 1);
          observers[notifName] = obs;
          break;
        }
      }
    }
  }

  addObserver = (notifName, observer, callback) => {
    let obs = observers[notifName];

    if (!obs) {
      observers[notifName] = [];
    }

    let obj = {observer: observer, callback: callback};
    observers[notifName].push(obj);
  }
}

export default NotificationService;
