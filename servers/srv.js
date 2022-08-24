import {HASURA_OPERATION} from './query.js'
import {DEL_HASURA_OPERATION} from './query.js'
import {INS_HASURA_OPERATION} from './query.js'
import {UPSERT_HASURA_OPERATION} from './query.js'
import {UPDATE1_HASURA_OPERATION} from './query.js'
import {UPDATE_HASURA_OPERATION} from './query.js'
import {INSERT_PARAM_HASURA_OPERATION} from './query.js'
import {UPDATE_PARAM_HASURA_OPERATION} from './query.js'

//const express = require("express");
//const bodyParser = require("body-parser");
import express from 'express';
const app = express();
import bodyParser from 'body-parser';
const PORT = process.env.PORT || 3100;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
//git test
// paste the code from codegen here
//const fetch = require("node-fetch")
import fetch from 'node-fetch';

// execute the parent operation in Hasura
const execute_select = async (variables) => {
  const fetchResponse = await fetch(
    "https://crack-jackal-14.hasura.app/v1/graphql",
    {
      headers: { 'x-hasura-admin-secret': 'ctr63GmYq710uxXMnxFmLpU2Yht6KrVo35hb5WYI19o7tMm9scDdS6I4n37F6ype' },
      method: 'POST',
      body: JSON.stringify({
        query: HASURA_OPERATION,
/*        
        query: UPDATE_PARAM_HASURA_OPERATION,
        variables: {
            "UserId": 'T0001',
            "changes": {
              "UserName": "이름변경",
              "Age": 9,
            }
          }
*/            
/*
        query: INSERT_PARAM_HASURA_OPERATION,
            "object": {
              "UserId": "T0006",
              "UserName": "김철수",
              "Age": 30
            }
        }
*/        
      })
    }
  );
  const data = await fetchResponse.json();
  console.log('SELECT DEBUG: ', data.data);
  return data;
};
  
// execute the parent operation in Hasura
const execute = async (variables) => {
  const fetchResponse = await fetch(
    "https://crack-jackal-14.hasura.app/v1/graphql",
    {
      headers: { 'x-hasura-admin-secret': 'ctr63GmYq710uxXMnxFmLpU2Yht6KrVo35hb5WYI19o7tMm9scDdS6I4n37F6ype' },
      method: 'POST',
      body: JSON.stringify({
        query: UPDATE_PARAM_HASURA_OPERATION,
        variables: {
            "UserId": 'T0001',
            "changes": {
              "UserName": "이름변경3",
              "Age": 27,
            }
          }
/*
        query: INSERT_PARAM_HASURA_OPERATION,
            "object": {
              "UserId": "T0006",
              "UserName": "김철수",
              "Age": 30
            }
        }
*/        
      })
    }
  );
  const data = await fetchResponse.json();
  console.log('DEBUG: ', data);
  return data;
};


// Request Handler
app.get('/select', async (req, res) => {
  // get request input

  // run some business logic

  // execute the Hasura operation
  const { data, errors } = await execute_select({  });
  //console.log("data : " + res.json)
   // if Hasura operation errors, then throw error
  if (errors) {
    return res.status(400).json(errors[0])
  }
  // success
  return res.json({
    ...data.UserInfo_UserInfo
  })

});

app.get('/update', async (req, res) => {
  console.log(req.body);
  // get request input
  //const {  } = req.body.input;

  // run some business logic

  // execute the Hasura operation
  const { data, errors } = await execute({  });

  // if Hasura operation errors, then throw error
  if (errors) {
    return res.status(400).json(errors[0])
  }

  // success
  return res.json({
    ...data.UserInfo_UserInfo
  })

});


app.get('/hello', async (req, res) => {
  console.log(req.body);
  return res.json({
    hello: "world"
  });
});

app.listen(PORT);
/*
- 하수라 프로젝트 페이지 
https://cloud.hasura.io/projects
- 하수라 프로젝트 등록 및 선택 (crack-jackal-14)
- 상위 DATA메뉴에서 테이블 생성 및 데이터 등록
https://glitch.com/signin
https://cloud.hasura.io/project/6c006f1e-121c-45b9-bf02-dd3e60483a06/console/api/api-explorer
https://glitch.com/edit/?utm_content=project_hasura-actions-starter-kit&utm_source=remix_this&utm_medium=button&utm_campaign=glitchButton#!/laser-fork-chef?path=src%2Fserver.js%3A17%3A10

- 실행
https://laser-fork-chef.glitch.me/MyQuery
*/
