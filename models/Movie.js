module.exports  = function(sequelize, DataTypes) {

  const Movie = sequelize.define("Movie", {
    _uid: {
      type:DataTypes.STRING
    },
    movieTitle: {
      type: DataTypes.STRING
    },
    releaseYear: {
      type: DataTypes.DATE
    },
    genre: {
      type: DataTypes.STRING
    },
    synopsis: {
      type: DataTypes.TEXT
    },
    emotion: {
      type:DataTypes.STRING
    }
  });

  // Movie.associate = function(models) {
  //   Movie.belongsTo(models.User);
  // }

  return Movie;
}
