var me = {
  name: "Donald Duck",
  location: "Timbuktu",
  occupations: ["Thwarting Bugs Bunny", "Tomfoolery"],
  hobbies: [{
    name: "Watching Cartoons",
    type: "current"
  },
  {
    name: "Quacking",
    type: "past"
  },
  {
    name: "Cooking",
    type: "current"
  }]
};

module.exports = {

  getName: function (req, res, next) {
    res.json(me.name);
  },
  getLocation: function (req, res, next) {
    res.json(me.location);
  },
  getOccupations: function (req, res, next) {
      console.log(req.query);
      if(req.query.order === 'asc') {
        me.occupations.reverse();
      } else {
        me.occupations.sort();
      }
    res.json(me.occupations);
  },
  getLatestOccupation: function (req, res, next) {
    res.json(me.occupations[me.occupations.length - 1]);
  },
  getHobbies: function (req, res, next) {
    res.json(me.hobbies);
  },
  getHobbiesByType: function (req, res, next) {
    var hobbiesByType = [];
    for (var i = 0; i < me.hobbies.length; i++) {
      if (me.hobbies[i].type === req.params.type) {
        hobbiesByType.push(me.hobbies[i]);
      }
    }
    return res.json(hobbiesByType);
  },
  changeName: function (req, res, next) {
    me.name = req.body.name;
    res.json(me.name);
  },
  addToHobbies: function(req, res, next) {
    me.hobbies.push(req.body);
    res.json(me.hobbies);
  }
};
