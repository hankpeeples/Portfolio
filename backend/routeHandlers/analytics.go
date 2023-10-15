package routeHandlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/gookit/slog"
)

func GetAnalytics(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Backend running",
	})
	slog.Info(c.Request.URL)
}
