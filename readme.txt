----------------------------------------------------------Readme-------------------------------------------------------
Procedure to execute the assignment :

Login deatils for oracle :
username : kxm152630
password : ******

1)start clean_data.sql  to clean up the database 
2)start majestic_schema.sql  to create the database and add the indexes
3)Refer to load_data :

time /opt/oracle/app/csoracle/product/12.1.0/dbhome_1/bin/sqlldr kxm152630/123456
   control file = majestic_million.ctl

time /opt/oracle/app/csoracle/product/12.1.0/dbhome_1/bin/sqlldr kxm152630/123456
ctl= majestic_million1.ctl

time /opt/oracle/app/csoracle/product/12.1.0/dbhome_1/bin/sqlldr kxm152630/123456
ctl= majestic_million2.ctl

time /opt/oracle/app/csoracle/product/12.1.0/dbhome_1/bin/sqlldr kxm152630/123456
ctl= majestic_million3.ctl

Note : The times taken for loading all the million data is noted in each case and the observations are as follows :

Time is measured for each of the load tables :
Majestic Table:

Table MAJESTIC:
  1000000 Rows successfully loaded.

Check the log file:
 1) majestic_million.log
for more information about the load.

real    3m27.100s
user    0m13.343s
sys     0m2.706s


2)Majectic_index1:

Table MAJESTIC_INDEX1:
  1000000 Rows successfully loaded.

Check the log file:
  majestic_million1.log
for more information about the load.

real    3m39.715s
user    0m13.522s
sys     0m2.918s


3)Majectic_index2:

Table MAJESTIC_INDEX2:
  1000000 Rows successfully loaded.

Check the log file:
  majestic_million2.log
for more information about the load.

real    3m41.543s
user    0m13.403s
sys     0m2.742s


4)Majectic_index3:

Table MAJESTIC_INDEX3:
  1000000 Rows successfully loaded.

Check the log file:
  majestic_million3.log
for more information about the load.

real    3m42.289s
user    0m13.536s
sys     0m2.974s

NOTE : Obeservations from the values obtained from loading the data :
We can see that the time for loading increases as the indexing level increases ie the loading the data without indexes takes lesser time than loading the data with indexes.Also we can later see that the time taken to search the records is lesser in the case of indexes and longer otherwise.
--------------------------------------------------------------
Executing the SQL queries :
The execution time for each of the queries is noted :


Query 1: 

set timing off
set timing on
start query_india_domains_noindex.sql

Elapsed: 00:00:01.73


set timing off
set timing on
start query_india_domains_index1.sql


Elapsed: 00:00:00.87

set timing off
set timing on
start query_india_domains_index2.sql


Elapsed: 00:00:00.82

set timing off
set timing on
start query_india_domains_index3.sql


Elapsed: 00:00:00.43

-------------------------------------------------------------------------------------------------------------------

Query 2 :

set timing off
set timing on
start query_top_domains_noindex.sql



Elapsed: 00:00:00.83


set timing off
set timing on
start query_top_domains_index1.sql


Elapsed: 00:00:00.33

set timing off
set timing on
start query_top_domains_index2.sql


Elapsed: 00:00:00.13

set timing off
set timing on
start query_top_domains_index3.sql


Elapsed: 00:00:00.10
-----------------------------------------------------------------------------------------

Query3 :

set timing off
set timing on
start query_wikipedia_noindex.sql

Elapsed: 00:00:00.06

set timing off
set timing on
start query_wikipedia_index1.sql

Elapsed: 00:00:00.05

set timing off
set timing on
start query_wikipedia_index2.sql

Elapsed: 00:00:00.05

set timing off
set timing on
start query_wikipedia_index3.sql

Elapsed: 00:00:00.04


Note: we see that the execution time decreases as the level of indexing increases from the recorded observations.
---------------------------------------------------------------
Part 2 : Lets put it on the web

Steps to the js file :
execute these paths in csgrads1.

export PATH=${PATH}:/people/cs/m/mxb135330/software/nodejs-0.12.7/bin
export LD_LIBRARY_PATH=/people/cs/m/mxb135330/software/instantclient
export OCI_LIB_DIR=/people/cs/m/mxb135330/software/instantclient
export OCI_INC_DIR=/people/cs/m/mxb135330/software/instantclient/sdk/include


npm install express
npm install mustachex
npm install oracledb
npm install body-parser
npm install orawrap

To run nodejs file : node majestic.js


Output :	 Web server listening on localhost: Port number which is mentioned in the nodejs file.
Note : 	if the port is occupied earlier ,we can receive an error message in which case we need to go back and change the port number in the nodejs file to a 	different one.

The required Html and views are placed in the folder called Views in the submission.

Steps to execute and check the working of the javascript and html :

Query1:
http://csgrads1.utdallas.edu:5020/query1/noind
http://csgrads1.utdallas.edu:5020/query1/ind1
http://csgrads1.utdallas.edu:5020/query1/ind2
http://csgrads1.utdallas.edu:5020/query1/ind3

Sample Input 1:
google.com 
Output 
1

Sample input 2:
facebook.com
Output 
2
-----------------------
Query 2:
http://csgrads1.utdallas.edu:5020/query2noind
http://csgrads1.utdallas.edu:5020/query2index1
http://csgrads1.utdallas.edu:5020/query2index2
http://csgrads1.utdallas.edu:5020/query2index3

Sample Result :

Input : in
Listening on 5020
length is 3047

Result:

nic.in,105

blogspot.in,551

google.co.in,618

olympe.in,3080     and so on.....

-------------------------------------------------------------------------
Part 3 : Testing how fast is your website ?
Test using Curl command .

QUERY1 : Sample input and outputs :

 time curl --data "name=google.com"  http://csgrads1.utdallas.edu:5020/query1result

<h4>Result:</h4>
<ul>
<p>1</p>

</ul>
real    0m0.361s
user    0m0.001s
sys     0m0.004s
----------------------------------------------------------
 time curl --data "name=facebook.com" http://csgrads1.utdallas.edu:5020/query1result

<h4>Result:</h4>
<ul>
<p>2</p>

</ul>
real    0m0.295s
user    0m0.002s
sys     0m0.003s
---------------------------------------------------------

 QUERY2:


 time curl --data "name=com" http://csgrads1.utdallas.edu:5020/result


real    0m1.482s
user    0m0.002s
sys     0m0.010s


real    0m1.457s
user    0m0.003s
sys     0m0.009s

------------------------------------------------------------

Apache J Meter :

The test plans are attached in  a folder named test_files(jmx). along with the result csv files. 

below are few snapshots. 

Query1results: 



query1_no_idx_1											
Label	# Samples	Average	Median	90% Line	95% Line	99% Line	Min	Max	Error %	Throughput	KB/sec
query1_no_idx	1	104	104	104	104	104	104	104	0	9.433962264	3.75884434
TOTAL	1	104	104	104	104	104	104	104	0	9.433962264	3.75884434
											
query1_no_idx_10											
Label	# Samples	Average	Median	90% Line	95% Line	99% Line	Min	Max	Error %	Throughput	KB/sec
query1_no_idx	10	230	149	389	389	477	93	487	0	9.478672986	3.776658768
TOTAL	10	230	149	389	389	477	93	487	0	9.478672986	3.776658768
											
query1_no_idx_50											
Label	# Samples	Average	Median	90% Line	95% Line	99% Line	Min	Max	Error %	Throughput	KB/sec
query1_no_idx	50	113	103	152	178	220	77	220	0	45.24886878	18.02884615
TOTAL	50	113	103	152	178	220	77	220	0	45.24886878	18.02884615
											
query1_idx1_1											
Label	# Samples	Average	Median	90% Line	95% Line	99% Line	Min	Max	Error %	Throughput	KB/sec
query1_idx1	1	82	82	82	82	82	82	82	0	12.19512195	4.942358994
TOTAL	1	82	82	82	82	82	82	82	0	12.19512195	4.942358994
											
											
query1_idx1_10											
Label	# Samples	Average	Median	90% Line	95% Line	99% Line	Min	Max	Error %	Throughput	KB/sec
query1_idx1	10	104	94	133	133	158	81	158	0	9.794319295	3.969377449
TOTAL	10	104	94	133	133	158	81	158	0	9.794319295	3.969377449
											
											
query1_idx1_50											
Label	# Samples	Average	Median	90% Line	95% Line	99% Line	Min	Max	Error %	Throughput	KB/sec
query1_idx1	50	128	117	177	194	232	83	236	0	45.12635379	18.28851252
TOTAL	50	128	117	177	194	232	83	236	0	45.12635379	18.28851252
											
											
query1_idx2_1											
Label	# Samples	Average	Median	90% Line	95% Line	99% Line	Min	Max	Error %	Throughput	KB/sec
query1_idx2	1	86	86	86	86	86	86	86	0	11.62790698	4.712481831
TOTAL	1	86	86	86	86	86	86	86	0	11.62790698	4.712481831
											
query1_idx2_10											
Label	# Samples	Average	Median	90% Line	95% Line	99% Line	Min	Max	Error %	Throughput	KB/sec
query1_idx2	10	90	85	103	103	104	82	104	0	9.920634921	4.020569816
TOTAL	10	90	85	103	103	104	82	104	0	9.920634921	4.020569816
											
query1_idx2_50											
Label	# Samples	Average	Median	90% Line	95% Line	99% Line	Min	Max	Error %	Throughput	KB/sec
query1_idx2	40	116	111	156	168	176	78	176	0	45.00450045	18.2391286
TOTAL	40	116	111	156	168	176	78	176	0	45.00450045	18.2391286
											
query1_idx3_1											
Label	# Samples	Average	Median	90% Line	95% Line	99% Line	Min	Max	Error %	Throughput	KB/sec
query1_idx3	1	93	93	93	93	93	93	93	0	10.20408163	4.13544324
TOTAL	1	93	93	93	93	93	93	93	0	10.20408163	4.13544324
											
query1_idx3_10											
Label	# Samples	Average	Median	90% Line	95% Line	99% Line	Min	Max	Error %	Throughput	KB/sec
query1_idx3	10	95	89	109	109	119	81	119	0	10.04016064	4.069010417
TOTAL	10	95	89	109	109	119	81	119	0	10.04016064	4.069010417
											
query1_idx3_50											
Label	# Samples	Average	Median	90% Line	95% Line	99% Line	Min	Max	Error %	Throughput	KB/sec
query1_idx3	50	113	96	165	203	238	76	238	0	44.76275739	18.14115656
TOTAL	50	113	96	165	203	238	76	238	0	44.76275739	18.14115656


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Query2: 




query2_no_idx_1											
Label	# Samples	Average	Median	90% Line	95% Line	99% Line	Min	Max	Error %	Throughput	KB/sec
query2_no_idx	1	53	53	53	53	53	53	53	0	18.86792453	51.05763561
TOTAL	1	53	53	53	53	53	53	53	0	18.86792453	51.05763561
											
query2_no_idx_10											
Label	# Samples	Average	Median	90% Line	95% Line	99% Line	Min	Max	Error %	Throughput	KB/sec
query2_no_idx	10	61	51	103	103	115	41	115	0	10.38421599	28.10025636
TOTAL	10	61	51	103	103	115	41	115	0	10.38421599	28.10025636
											
query2_no_idx_50											
Label	# Samples	Average	Median	90% Line	95% Line	99% Line	Min	Max	Error %	Throughput	KB/sec
query2_no_idx	50	51	50	64	71	85	34	85	0	47.16981132	127.644089
TOTAL	50	51	50	64	71	85	34	85	0	47.16981132	127.644089
											
query2_idx1_1											
Label	# Samples	Average	Median	90% Line	95% Line	99% Line	Min	Max	Error %	Throughput	KB/sec
query2_idx1	1	152	152	152	152	152	152	152	0	6.578947368	540.2575041
TOTAL	1	152	152	152	152	152	152	152	0	6.578947368	540.2575041
											
query2_idx1_10											
Label	# Samples	Average	Median	90% Line	95% Line	99% Line	Min	Max	Error %	Throughput	KB/sec
query2_idx1	10	281	258	398	398	455	178	455	0	8.333333333	684.3261719
TOTAL	10	281	258	398	398	455	178	455	0	8.333333333	684.3261719
											
query2_idx1_50											
Label	# Samples	Average	Median	90% Line	95% Line	99% Line	Min	Max	Error %	Throughput	KB/sec
query2_idx1	50	863	868	1120	1227	1612	296	1612	0	21.4961307	1765.24378
TOTAL	50	863	868	1120	1227	1612	296	1612	0	21.4961307	1765.24378
											
query2_idx2_1											
Label	# Samples	Average	Median	90% Line	95% Line	99% Line	Min	Max	Error %	Throughput	KB/sec
query2_idx2	1	254	254	254	254	254	254	254	0	3.937007874	323.3037032
TOTAL	1	254	254	254	254	254	254	254	0	3.937007874	323.3037032
											
query2_idx2_10											
Label	# Samples	Average	Median	90% Line	95% Line	99% Line	Min	Max	Error %	Throughput	KB/sec
query2_idx2	10	226	224	245	245	246	208	246	0	8.710801394	715.3235246
TOTAL	10	226	224	245	245	246	208	246	0	8.710801394	715.3235246
											
query2_idx2_50											
Label	# Samples	Average	Median	90% Line	95% Line	99% Line	Min	Max	Error %	Throughput	KB/sec
query2_idx2	50	1332	1262	2038	2041	2213	222	2213	0	17.24732666	1416.335644
TOTAL	50	1332	1262	2038	2041	2213	222	2213	0	17.24732666	1416.335644
											
query2_idx3_1											
Label	# Samples	Average	Median	90% Line	95% Line	99% Line	Min	Max	Error %	Throughput	KB/sec
query2_idx3	1	270	270	270	270	270	270	270	0	3.703703704	304.1449653
TOTAL	1	270	270	270	270	270	270	270	0	3.703703704	304.1449653
											
query2_idx3_10											
Label	# Samples	Average	Median	90% Line	95% Line	99% Line	Min	Max	Error %	Throughput	KB/sec
query2_idx3	10	264	247	302	302	372	215	372	0	7.794232268	640.0556557
TOTAL	10	264	247	302	302	372	215	372	0	7.794232268	640.0556557
											
query2_idx3_50											
Label	# Samples	Average	Median	90% Line	95% Line	99% Line	Min	Max	Error %	Throughput	KB/sec
query2_idx3	50	821	826	1405	1442	1491	242	1491	0	23.18034307	1903.549852
TOTAL	50	821	826	1405	1442	1491	242	1491	0	23.18034307	1903.549852


Note: The queries are simulated for 1, 10 and 50 users on different loop counts. 
Observations: the breakpoint is not reached for 50 users . The applicaion reaches the breakpoint at 1000 users. 
