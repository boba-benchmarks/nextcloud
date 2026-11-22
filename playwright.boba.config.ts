/*
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
// Benchmark only: the same config with no webServer, for a job that starts the
// Nextcloud server in a step before the tests.
import base from './playwright.config'

export default { ...base, webServer: undefined }
