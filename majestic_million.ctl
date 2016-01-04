load data 
infile 'majestic_million.csv'  
into table MAJESTIC
fields terminated by ','
trailing nullcols
           ( GLOBALRANK CHAR(4000),
             TLDRANK CHAR(4000),
             DOMAIN CHAR(4000),
             TLD CHAR(4000),
             REFSUBNETS CHAR(4000),
             REFIPS CHAR(4000),
             IDN_DOMAIN CHAR(4000),
             IDN_TLD CHAR(4000),
             PREVGLOBALRANK CHAR(4000),
             PREVTLDBANK CHAR(4000),
             PREVREFSUBNETS CHAR(4000),
             PREVREFIPS CHAR(4000)
           )
