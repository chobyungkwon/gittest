const HASURA_OPERATION = `
query MyQuery {
  UserInfo_UserInfo {
    Age
    UserId
    UserName
  }
}
`;

const DEL_HASURA_OPERATION = `
mutation delete_an_object {
  delete_UserInfo_UserInfo_by_pk (
    UserId: T0002
  ) {
    UserId
    UserName
    Age
  }
}
`;

const INS_HASURA_OPERATION = `
mutation insert_multiple_articles {
  insert_UserInfo_UserInfo(
    objects: [
      {
        UserId: "T0002",
        UserName: "홍길순",
        Age: 28
      },
      {
        UserId: "T0003",
        UserName: "홍길남",
        Age: 72
      }
    ]
  ) {
    returning {
      UserId
      UserName
      Age
    }
  }
}
`;

const UPSERT_HASURA_OPERATION = `
mutation upsert_article {
  insert_UserInfo_UserInfo (
    objects: [
      {
        UserId: "T0004",
        UserName: "홍길채",
        Age: 69
      }
    ],
    on_conflict: {
      constraint: UserInfo_pkey,
      update_columns: [Age]
    }
  ) {
    returning {
      UserId
      UserName
      Age
    }
  }
}
`;

const UPDATE1_HASURA_OPERATION = `
mutation update_an_article {
  update_UserInfo_UserInfo_by_pk (
    pk_columns: {UserId: T0002}
    _set: { Age: 50 }
  ) {
    UserId
    Age
  }
}
`;

const UPDATE_HASURA_OPERATION = `
mutation update_article {
  update_UserInfo_UserInfo (
    where: {Age: {_lte: 30}},
    _set: {Age: 20}
  ) {
    affected_rows
    returning {
      UserId
      UserName
      Age
    }
  }
}
`;

const INSERT_PARAM_HASURA_OPERATION = `
mutation insert_single_article($object: UserInfo_UserInfo_insert_input! ) {
    insert_UserInfo_UserInfo_one(object: $object) {
      UserId
      UserName
      Age
    }
  }
`;

const UPDATE_PARAM_HASURA_OPERATION = `
mutation update_article($UserId: String, $changes: UserInfo_UserInfo_set_input) {
    update_UserInfo_UserInfo(
      where: {UserId: {_eq: $UserId}},
      _set: $changes
    ) {
      affected_rows
      returning {
        UserId
        UserName
        Age
      }
    }
  }
  `;

export {HASURA_OPERATION};
export {DEL_HASURA_OPERATION}
export {INS_HASURA_OPERATION}
export {UPSERT_HASURA_OPERATION}
export {UPDATE1_HASURA_OPERATION}
export {UPDATE_HASURA_OPERATION}
export {INSERT_PARAM_HASURA_OPERATION}
export {UPDATE_PARAM_HASURA_OPERATION}