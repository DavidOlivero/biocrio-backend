import { spawn } from 'node:child_process';
import path from 'node:path';

import { BASH_SETUP_LITERALS_VALUES } from 'shared/const/bash-setup-literals-values.const';

export abstract class Utils {
  public static executeBashScript(
    fileName: string,
    parameters: string[],
  ): void {
    const scriptPath = path.join(
      process.cwd(),
      `${BASH_SETUP_LITERALS_VALUES.scriptsFolder}${fileName}${BASH_SETUP_LITERALS_VALUES.fielType}`,
    );

    spawn(BASH_SETUP_LITERALS_VALUES.bash, [scriptPath, ...parameters], {
      stdio: 'inherit',
    });
  }
}
