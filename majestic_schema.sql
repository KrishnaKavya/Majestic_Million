Create table MAJESTIC( GlobalRank VARCHAR2(3000) ,
                              TldRank    VARCHAR2(3000),
                              Domain     VARCHAR2(3000) ,
                              TLD        VARCHAR2(3000),
                              RefSubNets VARCHAR2(3000) ,
                              RefIPs    VARCHAR2(3000),
                              IDN_Domain VARCHAR2(3000),
                              IDN_TLD    VARCHAR2(3000),
                              PrevGlobalRank VARCHAR2(3000),
                              PrevTldBank   VARCHAR2(3000),
                              PrevRefSubNets VARCHAR2(3000),
                              PrevRefIPs     VARCHAR2(3000), 
                              PRIMARY KEY(GlobalRank));
                          

create table MAJESTIC_INDEX1( GlobalRank VARCHAR2(3000) ,
                              TldRank    VARCHAR2(3000),
                              Domain     VARCHAR2(3000) ,
                              TLD        VARCHAR2(3000),
                              RefSubNets VARCHAR2(3000) ,
                              RefIPs    VARCHAR2(3000),
                              IDN_Domain VARCHAR2(3000),
                              IDN_TLD    VARCHAR2(3000),
                              PrevGlobalRank VARCHAR2(3000),
                              PrevTldBank   VARCHAR2(3000),
                              PrevRefSubNets VARCHAR2(3000),
                              PrevRefIPs     VARCHAR2(3000), 
                              PRIMARY KEY(GlobalRank));

                              
create index index1 on MAJESTIC_INDEX1(TLD);
                              
create table MAJESTIC_INDEX2( GlobalRank VARCHAR2(3000) ,
                              TldRank    VARCHAR2(3000),
                              Domain     VARCHAR2(3000) ,
                              TLD        VARCHAR2(3000),
                              RefSubNets VARCHAR2(3000) ,
                              RefIPs    VARCHAR2(3000),
                              IDN_Domain VARCHAR2(3000),
                              IDN_TLD    VARCHAR2(3000),
                              PrevGlobalRank VARCHAR2(3000),
                              PrevTldBank   VARCHAR2(3000),
                              PrevRefSubNets VARCHAR2(3000),
                              PrevRefIPs     VARCHAR2(3000), 
                              PRIMARY KEY(GlobalRank) );

create index index2 on MAJESTIC_INDEX2(RefSubNets);

create table MAJESTIC_INDEX3( GlobalRank VARCHAR2(3000) ,
                              TldRank    VARCHAR2(3000),
                              Domain     VARCHAR2(3000) ,
                              TLD        VARCHAR2(3000),
                              RefSubNets VARCHAR2(3000) ,
                              RefIPs    VARCHAR2(3000),
                              IDN_Domain VARCHAR2(3000),
                              IDN_TLD    VARCHAR2(3000),
                              PrevGlobalRank VARCHAR2(3000),
                              PrevTldBank   VARCHAR2(3000),
                              PrevRefSubNets VARCHAR2(3000),
                              PrevRefIPs     VARCHAR2(3000), 
                              PRIMARY KEY(GlobalRank) );
                              
create index index3 on MAJESTIC_INDEX3(TLD,RefIPs);