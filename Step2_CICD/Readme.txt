`Step2_CICD/`
│
├─ `pom.xml`                      # Maven project + jmeter plugin configuration
├─ `Readme.txt`                   # (this file)
├─ `/.github/workflows/`
│   └─ `ci.yml`                   # CI workflow: setup JDK, Maven, run tests, collect artifacts
│
├─ `src/`
│   └─ `test/`
│       └─ `jmeter/`
│           ├─ `test-plan.jmx`        # Primary JMeter test plan(s)
│           ├─ `thread-groups/`       # Optional split test plans
│           ├─ `config/`
│           │   ├─ `user.properties`  # Environment overrides
│           │   └─ `jmeter.properties`
│           ├─ `csv/`                 # CSV data files for parametrization
│           └─ `scripts/`             # helper scripts (e.g., Windows `*.bat`, Linux `*.sh`)
│
├─ `lib/`                           # Optional custom jars / plugins for JMeter
│
├─ `target/`                        # Maven build output
│   └─ `jmeter/`
│       ├─ `results/`               # `.jtl` raw results
│       └─ `reports/`               # generated HTML reports
│
└─ `reports/`                       # CI-published reports (archived by pipeline)
    └─ `jmeter-html/`