'use strict';
module.exports = (sequelize, DataTypes) => {
  const staff_profile = sequelize.define('staff_profile', {
    staff_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dob: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.INTEGER,
    },
  }, {});
  staff_profile.associate = function(models) {
    // associations can be defined here
    staff_profile.belongsTo(models.staff, {
      foreignKey: 'staff_id'
    })
  };
  return staff_profile;
};