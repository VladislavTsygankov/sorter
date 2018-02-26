class Sorter {
  constructor() {
      this._storage=[];

      // your implementation
  }

  add(element) {
      this._storage.push(element);
    // your implementation
  }

  at(index) {
      return this._storage[index];
    // your implementation
  }

  get length() {
      return this._storage.length;
    // your implementation
  }

  toArray() {

      var arr = [];

      for (var i = 0; i<this._storage.length; i++)
      {
          arr[i]=this._storage[i];

      }
      return arr;
    // your implementation
  }

  sort(indices = []) {
      this.indices=indices;
      var temp = 0;
      for (var i = indices.length; i>0; i--){
          for(var j=0; j<i; j++){
              if (this._storage[indices[j]]>this._storage[indices[j+1]] && indices[j]<indices[j+1])
              {
                  temp = this._storage[indices[j]];
                  this._storage[indices[j]]=this._storage[indices[j+1]];
                  this._storage[indices[j+1]] = temp;
              }
              else if(this._storage[indices[j]]<this._storage[indices[j+1]] && indices[j]>indices[j+1])
              {
                  temp = this._storage[indices[j]];
                  this._storage[indices[j]]=this._storage[indices[j+1]];
                  this._storage[indices[j+1]] = temp;
              }
          }
      }

    // your implementation
  }

  setComparator(compareFunction) {
    
    // your implementation

  }
}

module.exports = Sorter;
