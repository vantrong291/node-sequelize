'use strict';
module.exports = (sequelize, DataTypes) => {
  const staff = sequelize.define('staff', {
    staff_id:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING
    }
  }, {});
  staff.associate = function(models) {
    // associations can be defined here
    staff.hasOne(models.staff_profile, {
      foreignKey: 'staff_id' 
    })
  };
  return staff;
};