export default class TodoItem {
	constructor (data, inIsCompletedTasks) {
		this.id = data.id || uuid();
		this.text = data.text;
		this.isCompleted = data.isCompleted || false;
    this.isEdition = data.isEdition || false;
    
    if (inIsCompletedTasks) {
      this.isDisplay = this.isCompleted;
    }
    else {
      this.isDisplay = !this.isCompleted;
    };
	}
}



function uuid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
