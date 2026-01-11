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

