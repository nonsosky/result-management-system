let mongoURI = "";

if(process.env.NODE_ENV === "production"){
  mongoURI = "mongodb://nonsosky:nonsosky1@ds157641.mlab.com:57641/result-management-system-prod";
} else {
  mongoURI = "mongodb://127.0.0.1:27017/resultManagement";
}

module.exports = {mongoURI};