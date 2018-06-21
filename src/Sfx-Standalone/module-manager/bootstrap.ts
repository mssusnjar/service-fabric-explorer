//-----------------------------------------------------------------------------
// Copyright (c) Microsoft Corporation.  All rights reserved.
// Licensed under the MIT License. See License file under the project root for license information.
//-----------------------------------------------------------------------------

import * as mmutils from "./utils";

(async () => {
    const constructorOptions = JSON.parse(process.argv0);
    const moduleManager = await mmutils.createModuleManagerAsync(constructorOptions);

    global["sfxModuleManager"] = moduleManager;
})();