package main

import (
	"backend/routeHandlers"

	"github.com/gin-gonic/gin"
	"github.com/gookit/slog"
)

func main() {
	slog.Configure(func(logger *slog.SugaredLogger) {
		f := logger.Formatter.(*slog.TextFormatter)
		f.EnableColor = true
	})

	router := gin.Default()

	router.GET("/analytics", routeHandlers.GetAnalytics)
	router.Run()
}
