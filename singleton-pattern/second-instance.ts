import logger from "./singleton";

export default function logSecondImplementation() {
  logger.printLogCount();
  logger.log("Second File");
  logger.printLogCount();
}
