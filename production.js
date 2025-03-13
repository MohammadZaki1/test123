/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

module.exports = {

  api: {
    port: 5007,
    root: '/api',
    // serverUrl : 'http://localhost:9002/',
    serverUrl : 'https://devhsncverify.studentscenter.in/server/api/',
    //serverUrl : 'https://kcdev.etranscript.in/api'
    clientUrl : 'https://devhsncverify.studentscenter.in/app/',
    edulabAllow : true,
    directorName : 'Dr. Jayesh Joglekar',
    PASSPHRASE : 'HSNCUniversity' 
  },
  // NODEMODULE_LOCATION:{
  //   NODEMODULE_LOCATION:'F:/newclone guverification/guVerificationServer/'
  // },
  email:{
    BASE_URL_SENDGRID:'http://185.202.236.149:62/',
  },
  path:{
        FILE_LOCATION : '/var/lib/jenkins/workspace/HsncVerification/hsncverificationserver/',
            NODEMODULE_LOCATION:'/var/lib/jenkins/workspace/HsncVerification/hsncverificationserver/'

  },
  frontEnd: {
    domain: 'http://localhost:4005/',
  },

  auth: {
    jwt: {
      accessTokenSecret: '0d7c5c5f-768c-4d98-8900-13aadaa21937',
      refreshTokenSecret: '1a7v8c0l-391k-1f82-4492-tha3taa11334',
      accessTokenLife: 3600,
      refreshTokenLife: 2592000,
    },
    resetPassword: {
      secret: '56gXxY{+D6/4m#kZ394j2=bT2eHqTAu>r8zAT>yEn:;TM#9*Vg',
      ttl: 86400 * 1000, // 1 day
      algorithm: 'aes256',
      inputEncoding: 'utf8',
      outputEncoding: 'hex',
    },
  },

  mysqldb:{
    HOST: "",
    USER: "root",
    PASSWORD: "",
    DB: "",
    dialect: "mysql",
    PORT : 3305,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },
  // mysqldb:{
  //   HOST: "95.111.243.241",
  //   USER: "root",
  //   PASSWORD: "brainvireadroot",
  //   DB: "GU_verification",
  //   port: 49156,
  //   dialect: "mysql",
  //   pool: {
  //     max: 5,
  //     min: 0,
  //     acquire: 30000,
  //     idle: 10000
  //   }
  // },
  logger: {
    console: {
      level: 'debug',
    },
    file: {
      logDir: 'logs',
      logFile: 'bundle_node.log',
      level: 'debug',
      maxsize: 1024 * 1024 * 10, // 10MB
      maxFiles: 5,
    },
  },
  paymentGateway :{
    access_Code : '',
    working_Key : '',
    merchantId : '',
    secure_Url : ''
  }
};
