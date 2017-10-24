module.exports  = function(sequelize, DataTypes) {
  var Movie = sequelize.define("Movie", {
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
  //   Movie.belongsTo(models.User, {
  //     onDelete:"CASCADE",
  //     foreignKey: {
  //       allowNull:false
  //     }
  //   });
  // }

  return Movie;
}
