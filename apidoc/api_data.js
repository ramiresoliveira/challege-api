define({ "api": [
  {
    "type": "delete",
    "url": "/flow",
    "title": "Flow-DELETE",
    "group": "Challenge_Api",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "id",
            "description": "<p>Id do Flow.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 202 Accepted\n{\n  \"_id\": \"5c54f2e6904b9c38f6b60aa2\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/flow-route.js",
    "groupTitle": "Challenge_Api",
    "name": "DeleteFlow"
  },
  {
    "type": "delete",
    "url": "/role",
    "title": "Role-DELETE",
    "group": "Challenge_Api",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "id",
            "description": "<p>Id da Role.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 202 Accepted\n{\n  \"_id\": \"5c54f2e6904b9c38f6b60aa2\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/role-route.js",
    "groupTitle": "Challenge_Api",
    "name": "DeleteRole"
  },
  {
    "type": "delete",
    "url": "/user",
    "title": "User-DELETE",
    "group": "Challenge_Api",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "id",
            "description": "<p>Id do usuário.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 202 Accepted\n{\n  \"_id\": \"5c54f2e6904b9c38f6b60aa2\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user-route.js",
    "groupTitle": "Challenge_Api",
    "name": "DeleteUser"
  },
  {
    "type": "get",
    "url": "/activity",
    "title": "Activity-GET",
    "group": "Challenge_Api",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "_id",
            "description": "<p>Id Activity</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "idFlow",
            "description": "<p>Id Flow</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "idStep",
            "description": "<p>Id Step</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "ownerViewer",
            "description": "<p>Id Viewer</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Tipo</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data de alteração</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data de criação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n   \"_id\": \"5c5746b8813f332cf7f12855\",\n   \"idFlow\": \"5c5731bdc6f18524b8bd1c35\",\n   \"ownerViewer\": \"5c57414c7533592a51473506\",\n   \"type\": \"StartFlow\",\n   \"updatedAt\": \"2019-02-03T19:53:28.237Z\",\n   \"createdAt\": \"2019-02-03T19:53:28.237Z\",\n   \"__v\": 0\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/activity-route.js",
    "groupTitle": "Challenge_Api",
    "name": "GetActivity"
  },
  {
    "type": "get",
    "url": "/company",
    "title": "Company-GET",
    "group": "Challenge_Api",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "_id",
            "description": "<p>Id da Empresa</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "name",
            "description": "<p>Nome da Empresa</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "description",
            "description": "<p>Descrição da Empresa</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data de alteração</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data de criação</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "idOwner",
            "description": "<p>Usuário Id do usuário dono</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n   \"_id\": \"5c539f218687cf1574157ef0\",\n   \"name\": \"Company\",\n   \"description\": \"Company description\",\n   \"updatedAt\": \"2019-02-03T15:50:56.890Z\",\n   \"createdAt\": \"2019-02-01T01:21:37.843Z\",\n   \"idOwner\": \"5c54f2e6904b9c38f6b60aa2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/company-route.js",
    "groupTitle": "Challenge_Api",
    "name": "GetCompany"
  },
  {
    "type": "get",
    "url": "/flow",
    "title": "Flow-GET",
    "group": "Challenge_Api",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "description": "<p>Flow habilitado</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "_id",
            "description": "<p>Id do Flow</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do Flow</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descrição do Flow</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "idStarStep",
            "description": "<p>Step inicial</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "idCompany",
            "description": "<p>Empresa do Flow</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data de alteração</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data de criação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n {\n   \"enabled\": true,\n   \"_id\": \"5c5731bdc6f18524b8bd1c35\",\n   \"name\": \"Ciclo 1\",\n   \"description\": \"descrição 1\",\n   \"idStarStep\":\"1q489f218687cf1574157ax0\" \n   \"idCompany\": \"5c539f218687cf1574157ef0\",\n   \"updatedAt\": \"2019-02-03T18:23:57.405Z\",\n   \"createdAt\": \"2019-02-03T18:23:57.405Z\",\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/flow-route.js",
    "groupTitle": "Challenge_Api",
    "name": "GetFlow"
  },
  {
    "type": "get",
    "url": "/role",
    "title": "Role-GET",
    "group": "Challenge_Api",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "description": "<p>Role habilitado</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "_id",
            "description": "<p>Id da Role</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome da Role</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "idCompany",
            "description": "<p>Empresa da Role</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data de alteração</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data de criação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n {\n   \"_id\": \"5c55b49f34e51d16bf186a0e\",\n   \"name\": \"Funcionario 1\",\n   \"idCompany\": \"5c54b2d838b4301ac7837a0c\",\n   \"enabled\": true,\n   \"updatedAt\": \"2019-02-02T15:17:51.467Z\",\n   \"createdAt\": \"2019-02-02T15:17:51.467Z\",\n   \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/role-route.js",
    "groupTitle": "Challenge_Api",
    "name": "GetRole"
  },
  {
    "type": "get",
    "url": "/step",
    "title": "Step-GET",
    "group": "Challenge_Api",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "description": "<p>Step habilitado</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "_id",
            "description": "<p>Id do Step</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do Step</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Nome do Step</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "idFlow",
            "description": "<p>Flow do Step</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "idCompany",
            "description": "<p>Empresa do Step</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Tipo ['popover', 'modal', 'hotspot', 'video', 'notification']</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "innerText",
            "description": "<p>Texto interno</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data de alteração</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data de criação</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "idNextStep",
            "description": "<p>Próximo Step</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": " HTTP/1.1 200 OK\n {\n    \"enabled\": true,\n    \"_id\": \"5c5738728065be26c02c5e86\",\n    \"name\": \"passo 2\",\n    \"description\": \"descrição passo 2\",\n    \"idFlow\": \"5c5731bdc6f18524b8bd1c35\",\n    \"idCompany\": \"5c539f218687cf1574157ef0\",\n    \"type\": \"popover\",\n    \"innerText\": \"texto interno 2\",\n    \"updatedAt\": \"2019-02-03T18:53:56.962Z\",\n    \"createdAt\": \"2019-02-03T18:52:34.168Z\",\n    \"idNextStep\": \"5c5738c48065be26c02c5e88\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/step-route.js",
    "groupTitle": "Challenge_Api",
    "name": "GetStep"
  },
  {
    "type": "get",
    "url": "/track",
    "title": "Track-GET",
    "group": "Challenge_Api",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "description": "<p>Step habilitado</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "_id",
            "description": "<p>Id do Track</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "action",
            "description": "<p>Ação ['Create', 'Edit', 'Remove']</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object",
            "description": "<p>Objeto ['Company', 'Role', 'FLow', 'Step', 'User']</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data de alteração</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data de criação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n   \"_id\": \"5c57552c1417fe10ec250b4d\",\n   \"action\": \"Create\",\n   \"object\": \"Company\",\n   \"updatedAt\": \"2019-02-03T20:55:08.332Z\",\n   \"createdAt\": \"2019-02-03T20:55:08.332Z\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/track-route.js",
    "groupTitle": "Challenge_Api",
    "name": "GetTrack"
  },
  {
    "type": "get",
    "url": "/user",
    "title": "User-GET",
    "group": "Challenge_Api",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "description": "<p>Usuário habilitado</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "roles",
            "description": "<p>Funções do usuário</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "_id",
            "description": "<p>Id do usuário</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do usuário</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "idCompany",
            "description": "<p>Empresa do usuário</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail do usuário</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Senha do usuário</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data de alteração</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data de criação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "  HTTP/1.1 200 OK\n  {\n    \"enabled\": true,\n    \"roles\": [\n        \"5c54c933aa81232724af03c4\",\n        \"5c54f112696ee8378f980b53\"\n    ],\n    \"_id\": \"5c54f2e6904b9c38f6b60aa2\",\n    \"name\": \"Usuario\",\n    \"idCompany\": \"5c539f218687cf1574157ef0\",\n    \"email\": \"usuario@teste.com.br\",\n    \"password\": \"usuario123\",\n    \"updatedAt\": \"2019-02-02T01:31:18.645Z\",\n    \"createdAt\": \"2019-02-02T01:31:18.645Z\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user-route.js",
    "groupTitle": "Challenge_Api",
    "name": "GetUser"
  },
  {
    "type": "get",
    "url": "/viewer",
    "title": "Viewer-GET",
    "group": "Challenge_Api",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "description": "<p>Step habilitado</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "_id",
            "description": "<p>Id do Viewer</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientId",
            "description": "<p>Client Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customFields",
            "description": "<p>Custom fields</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uuId",
            "description": "<p>uuId</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data de alteração</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data de criação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n {\n   \"enabled\": true,\n   \"_id\": \"5c57414c7533592a51473506\",\n   \"clientId\": \"01234\",\n   \"customFields\": \"campo de teste\",\n   \"uuId\": \"249780d0-27ea-11e9-865b-7b35a5d0d293\",\n   \"updatedAt\": \"2019-02-03T19:30:20.135Z\",\n   \"createdAt\": \"2019-02-03T19:30:20.135Z\",\n   \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/viewer-route.js",
    "groupTitle": "Challenge_Api",
    "name": "GetViewer"
  },
  {
    "type": "post",
    "url": "/activity",
    "title": "Activity-POST",
    "group": "Challenge_Api",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "idFlow",
            "description": "<p>Id Flow .</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "idStep",
            "description": "<p>Id Step.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ownerViewer",
            "description": "<p>Id Viewer.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Tipo.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 201 Created\n{\n  \"_id\": \"5c54f2e6904b9c38f6b60aa2\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/activity-route.js",
    "groupTitle": "Challenge_Api",
    "name": "PostActivity"
  },
  {
    "type": "post",
    "url": "/company",
    "title": "Company-POST",
    "group": "Challenge_Api",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome da Empresa</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descrição da Empresa</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data de alteração</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data de criação</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "idOwner",
            "description": "<p>Id do usuário dono</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 201 Created\n{\n  \"_id\": \"5c54f2e6904b9c38f6b60aa2\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/company-route.js",
    "groupTitle": "Challenge_Api",
    "name": "PostCompany"
  },
  {
    "type": "post",
    "url": "/flow",
    "title": "Flow-POST",
    "group": "Challenge_Api",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "description": "<p>Flow habilitado</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do Flow</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descrição do Flow</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "idStarStep",
            "description": "<p>Step inicial</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "idCompany",
            "description": "<p>Empresa do Flow</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 201 Created\n{\n  \"_id\": \"5c54f2e6904b9c38f6b60aa2\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/flow-route.js",
    "groupTitle": "Challenge_Api",
    "name": "PostFlow"
  },
  {
    "type": "post",
    "url": "/role",
    "title": "Role-POST",
    "group": "Challenge_Api",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "description": "<p>Role habilitado</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "_id",
            "description": "<p>Id da Role</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome da Role</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "idCompany",
            "description": "<p>Empresa da Role</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 201 Created\n{\n  \"_id\": \"5c54f2e6904b9c38f6b60aa2\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/role-route.js",
    "groupTitle": "Challenge_Api",
    "name": "PostRole"
  },
  {
    "type": "post",
    "url": "/step",
    "title": "Step-POST",
    "group": "Challenge_Api",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "description": "<p>Step habilitado</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do Step</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Nome do Step</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "idFlow",
            "description": "<p>Flow do Step</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "idCompany",
            "description": "<p>Empresa do Step</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Tipo ['popover', 'modal', 'hotspot', 'video', 'notification']</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "innerText",
            "description": "<p>Texto interno</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 201 Created\n{\n  \"_id\": \"5c54f2e6904b9c38f6b60aa2\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/step-route.js",
    "groupTitle": "Challenge_Api",
    "name": "PostStep"
  },
  {
    "type": "post",
    "url": "/track",
    "title": "Track-POST",
    "group": "Challenge_Api",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "description": "<p>Step habilitado</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "action",
            "description": "<p>Ação ['Create', 'Edit', 'Remove']</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "object",
            "description": "<p>Objeto ['Company', 'Role', 'FLow', 'Step', 'User']</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 201 Created\n{\n  \"_id\": \"5c54f2e6904b9c38f6b60aa2\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/track-route.js",
    "groupTitle": "Challenge_Api",
    "name": "PostTrack"
  },
  {
    "type": "post",
    "url": "/user",
    "title": "User-POST",
    "group": "Challenge_Api",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do usuário.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "idCompany",
            "description": "<p>Empresa do usuário.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail do usuário.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Senha do usuário.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "description": "<p>Usuário habilitado.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "roles",
            "description": "<p>Funções do usuário.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 201 Created\n{\n  \"_id\": \"5c54f2e6904b9c38f6b60aa2\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user-route.js",
    "groupTitle": "Challenge_Api",
    "name": "PostUser"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "Login-PUT",
    "group": "Challenge_Api",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail do usuário.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Senha do usuário.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 201 Created\n{\n  \"success\": true,\n  \"message\": \"Token criado\",\n  \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoicmFtaXJlc0Bib2wuY29tLmJyIn0sImlhdCI6MTU0OTMxMzgwMCwiZXhwIjoxNTQ5MzE3NDAwfQ.8nPqNRGGNnm3V5KfXQpURh7SyE7WF5st6224ZXxsAp4\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user-route.js",
    "groupTitle": "Challenge_Api",
    "name": "PostUserLogin"
  },
  {
    "type": "post",
    "url": "/viewer",
    "title": "Viewer-POST",
    "group": "Challenge_Api",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "description": "<p>Step habilitado</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientId",
            "description": "<p>Client Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customFields",
            "description": "<p>Custom fields</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 201 Created\n{\n  \"_id\": \"5c54f2e6904b9c38f6b60aa2\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/viewer-route.js",
    "groupTitle": "Challenge_Api",
    "name": "PostViewer"
  },
  {
    "type": "put",
    "url": "/company",
    "title": "Company-PUT",
    "group": "Challenge_Api",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "id",
            "description": "<p>Id da Empresa</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome da Empresa</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descrição da Empresa</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "idOwner",
            "description": "<p>Id do usuário dono</p>"
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "subscription",
            "description": "<p>{ &quot;idPlan&quot;: &quot;5c55cd3b1964bb20ddc2804c&quot;, &quot;status&quot;: &quot;trial&quot;, &quot;dueDate&quot;: 5 }</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 201 Created\n{\n  \"_id\": \"5c54f2e6904b9c38f6b60aa2\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/company-route.js",
    "groupTitle": "Challenge_Api",
    "name": "PutCompany"
  },
  {
    "type": "put",
    "url": "/flow",
    "title": "Flow-PUT",
    "group": "Challenge_Api",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "_id",
            "description": "<p>Id do Flow</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "description": "<p>Flow habilitado</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do Flow</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descrição do Flow</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "idStarStep",
            "description": "<p>Step inicial</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 201 Created\n{\n  \"_id\": \"5c54f2e6904b9c38f6b60aa2\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/flow-route.js",
    "groupTitle": "Challenge_Api",
    "name": "PutFlow"
  },
  {
    "type": "put",
    "url": "/role",
    "title": "Role-PUT",
    "group": "Challenge_Api",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "description": "<p>Role habilitado</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "_id",
            "description": "<p>Id da Role</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome da Role</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 201 Created\n{\n  \"_id\": \"5c54f2e6904b9c38f6b60aa2\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/role-route.js",
    "groupTitle": "Challenge_Api",
    "name": "PutRole"
  },
  {
    "type": "put",
    "url": "/user",
    "title": "User-PUT",
    "group": "Challenge_Api",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "id",
            "description": "<p>Id do usuário.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do usuário.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail do usuário.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Senha do usuário.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "description": "<p>Usuário habilitado.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "roles",
            "description": "<p>Funções do usuário.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 202 Accepted\n{\n  \"_id\": \"5c54f2e6904b9c38f6b60aa2\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user-route.js",
    "groupTitle": "Challenge_Api",
    "name": "PutUser"
  }
] });
