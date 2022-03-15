import { appConfig } from '@config/app'

import { app } from '@shared/infra/http/app'

app.listen(appConfig.port, () =>
  console.log(`servers is running on PORT ${appConfig.port}`)
)
