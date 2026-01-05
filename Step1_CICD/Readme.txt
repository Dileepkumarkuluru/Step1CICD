
Work Load Model / Load Model / WLM:


Per Hour = 5000 tx


Little Law Formula :

No Users = tps * (Think Time + Response Time + Pacing)


Target Tx: 1800/hr (TPH)

Total Tx: 30

Respone Time =30 sec

Pacing = ?

No Users = ?

Step 1: Target Iteration = Total No. Tx/Per Script tx 

						= 1800/30
						= 60
						
Step 2: Time for the Target Iteration s = Total Iterations * Iteration time

										= 60 * 30
										=1800 sec
										
Step 4: Remaining = Hour time - Target Time

					= 3600 - 1800
					= 1800

Step 5 : Pacing = Remaining Total time / Total Iterations
				
				= 1800/60
				= 30 sec
			

Reverse :

Iteration Time = Iteration time + Pacing
				= 30+ 30
				= 60 sec
				
Total No. Transactions  =Number of iterations * 1 Iteration time
						
						=60 * 60
						=3600 sec (hour)
						
						


Test Execution Monitoring:

Jmeter (Test Execution)
InfluxdB (Storing the test executed results)
Grafana (To Visualize the results in graphical format)


1. Download InfluxdB

	i. unzip the influxdB file
	ii. Start the influxdB server using cmd prompt (influxd.exe)
		
	iii. Go to browser >> localhost:8086 >> InfluxdB asks you to create your own credentials.
	iv. Set it up your credentials (remember it).
	v. After creating the bucket  a token will be created. Store it for further use.
	
	QCg6Gm0HqfqBw_S-Jkq5Jj9DVTXO7APrLJUeP9as5zIdQcroS_E0tv5CxbrW7RorTcaznxjUi7G2ARWXQmiF0g==
	
2. Configure the backend listener properly.

	i. Add the backend listener to your jmeter script (Test Plan >> Add >> Listeners >> Backend Listers)
	ii. InfluxdB Backend listener client you have to select.
	iii. add "influxdbtoken" you have to pass the token which is generated at influxdB.
	iv. http://{hostname}:8086/api/v2/write?org={orgname}&bucket=jmeter&u={username}&p={password}
	
2. Download Grafana
	
	1. Download grafana
	2. Unzip and start the grafana server.
	3. go to your broser and enter http://localhost:3000
	4. Default username and password : admin & admin
	5. Connections >> Datasource >> New Data source >> InfluxdB >> Flux 
	6. Dashboard and import the dashboard.

