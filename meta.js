module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      label: 'Project name',
    },
    description: {
      type: 'string',
      required: true,
      label: 'Project description',
      default: 'A Nuxt.js project',
    },
    author: {
      type: 'string',
      label: 'Author',
    },
  },
  completeMessage:
    "                                                            \r\n                  ~+~                                       \r\n                 =+I~                                       \r\n                 ~=7~                                       \r\n                ::,::,    +=?+=                             \r\n                =~=?::=~~?==I=~~  ~:~===                    \r\n                ~~=?~~:~+,~=~=:==~~=++I+==                  \r\n                ~~=+~:~= ~~7I=,~~~=++??++=                  \r\n               I=~==::~ ,:~=~~=~:~+?+===:=                  \r\n               ~7:=?+:++?:,:~+,:,?~~:=::~:                  \r\n               ~I,:==:,:?===,=?:?+~~, ==                    \r\n               ~+:=~:::++++==I=+??+~~=                      \r\n               ~~:~:~:  =:+=+:+??+~~                        \r\n                :         :~++I?+~:                         \r\n                           ::,,,:=                          \r\n                           :~~:~~=                          \r\n                           =:~,,,~+                         \r\n                        ?~:=,:::+==+                        \r\n                      +=~,,=,::,+~+=                        \r\n                    +==++:,~~:~+I++~:                       \r\n                   +==??+~,,,:=+I+=~,                       \r\n                  ==??++==~,  ~~I?=~                        \r\n              ~  =+?++===    ?I?+?=~                        \r\n              ~~,+++=~        ~??+=~+=                      \r\n               ~~ :::          ~=++=??==                    \r\n               :~,?+~+          :~:=?=~~~                   \r\n                ~~=~~~           =~:~=++~~                  \r\n                ~::~~              ~::=++~                  \r\n                 ::::                ~::=+:                 \r\n                 :::                   ~:=+~,               \r\n               +,::~                     ~==?~              \r\n               ?+:::                      ~:=+=~            \r\n              ?=++:==                      =~~+=~           \r\n            ++===~=~,                      =~~~+~           \r\n          +II?+=?==~~                       ~=~,:=          \r\n                                           +~~~=~,          \r\n                                           =++=,            \r\n                                                            \n\n\nTo get started with the Varia template run the following: \n $ cd {{ destDirName }}\n $ yarn \n $ yarn dev \n\nFor more information visit: https://github.com/daveberning/nuxt-starter-varia\n\nhttps://github.com/daveberning\nhttps//:twitter.com/daveberning",
  skipInterpolation: ['src/**/* vue', 'node_modules/**'],
}