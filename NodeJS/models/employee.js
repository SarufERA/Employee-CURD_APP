const mongoose = require('mongoose');

var Employee = mongoose.model('Employee', {
    dept: { type: String },
    deptNo: { type: Number },
    name: { type: String },
    position: { type: String },
    empId: { type: String },
    salary: { type: Number },
    office: { type: String }
});

module.exports =  {Employee} ;